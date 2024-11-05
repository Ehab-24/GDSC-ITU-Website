import db from "$lib/db";
import type { Application } from "$lib/types.js";
import { fail } from "@sveltejs/kit";

export const ssr = true;

function validatePhoneNumber(ph: string): boolean {
    if (ph.length === 11 && ph.charAt(0) === "0") {
        ph = ph.substring(1);
    }
    const r = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return r.test(ph);
}

function validateStudentId(id: string): boolean {
    id = id.toLowerCase();
    if (![9, 10].includes(id.length)) {
        return false;
    }
    if (!["bs", "ms"].includes(id.substring(0, 2))) {
        return false;
    }
    id = id.substring(2);
    if (
        !["cs", "ce", "ai", "se", "ee", "mt"].includes(id.substring(0, 2)) &&
        id.substring(0, 3) !== "eds"
    ) {
        return false;
    }

    id = id.substring(id.length - 5);
    const batchNumber = parseInt(id);
    return batchNumber >= 20000 && batchNumber <= 24999
}

function validateStudentEmail(email: string): {
    message: string;
    valid: boolean;
} {
    const [rollno, domain] = email.split("@");

    let valid = domain === "itu.edu.pk";
    if (!valid) {
        return {
            message: "Only university emails are allowed!(@itu.edu.pk)",
            valid,
        };
    }

    valid = validateStudentId(rollno);
    if (!valid) {
        return {
            message: "Invalid roll number in email!",
            valid,
        };
    }

    return {
        message: "",
        valid,
    };
}

function validateApplication(a: Application): {
    valid: boolean;
    message: string;
} {
    let message = "Missing required field!";
    // let validEmail;

    const validStudentId = validateStudentId(a.studentId);
    const validContact = validatePhoneNumber(a.contact);
    // ({ valid: validEmail, message } = validateStudentEmail(a.email));
    if (!validContact) {
        message = "Invalid contact number!";
    } else if (!validStudentId) {
        message = "Invalid roll number!";
    }

    const valid =
        !!a.fullName &&
        // !!validEmail &&
        !!validContact &&
        !!validStudentId &&
        !!a.department &&
        !!a.reason &&
        !!a.team;
    return { valid, message };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const studentId = data.get("roll-number") as string || ""
        const application: Application = {
            fullName: (data.get("full-name") as string) || "",
            // email: (data.get("email") as string) || "",
            email: `${studentId}@itu.edu.pk`,
            contact: (data.get("contact-number") as string) || "",
            studentId: studentId,
            department: (data.get("department") as string) || "",
            team: ((data.getAll("team") as string[]) || []).join(","),
            reason: (data.get("reason") as string) || "",
            experience: (data.get("experience") as string) || "",
            status: "pending",
            createdAt: new Date(),
        };

        const validity = validateApplication(application);
        if (!validity.valid) {
            return fail(400, { success: false, message: validity.message });
        }

        const duplicate = await db.collection("applications").findOne({
            $or: [{ email: application.email }, { studentId: application.studentId }],
        });
        const message =
            duplicate?.email === application.email
                ? "Email already registered!"
                : "Roll number already registered!";
        if (duplicate !== null) {
            return fail(409, { success: false, message });
        }

        try {
            // @ts-ignore
            await db.collection("applications").insertOne(application);
            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
            };
        }
    },
};
