import db from "$lib/db";
import type { Application } from "$lib/types.js";
import { fail } from "@sveltejs/kit";

export const ssr = true;

function validateApplication(a: Application): boolean {
  return (
    !!a.fullName &&
    !!a.email &&
    !!a.contact &&
    !!a.studentId &&
    !!a.department &&
    !!a.reason &&
    !!a.team
  );
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

    if (!validateApplication(application)) {
      return fail(400);
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
