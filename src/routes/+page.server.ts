import db from "$lib/db";
import type { Application } from "$lib/types.js";
import { fail } from "@sveltejs/kit";

export const ssr = true;

function validatePhoneNumber(ph: string): boolean {
  var r = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
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
  if (batchNumber > 23999 || batchNumber < 20000) {
    return false;
  }
  return true;
}

function validateApplication(a: Application): {
  valid: boolean;
  message: string;
} {
  const validStudentId = validateStudentId(a.studentId);
  const validContact = validatePhoneNumber(a.contact);
  const valid =
    !!a.fullName &&
    !!a.email &&
    !!validContact &&
    !!validStudentId &&
    !!a.department &&
    !!a.reason &&
    !!a.team;
  let message = "Missing required field!";
  if (!validContact) {
    message = "Invalid contact number!";
  } else if (!validStudentId) {
    message = "Invalid roll number!";
  }
  return { valid, message };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const application: Application = {
      fullName: (data.get("full-name") as string) || "",
      email: (data.get("email") as string) || "",
      contact: (data.get("contact-number") as string) || "",
      studentId: (data.get("roll-number") as string) || "",
      department: (data.get("department") as string) || "",
      team: (data.get("team") as string) || "",
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
