import type { Application } from "$lib/types";
import { getApplications } from "$lib/db/applications";
export async function load() {
  const applications = await getApplications();
  return {
    applications,
    //   applications: [
    //     {
    //       _id: "_id",
    //       fullName: "fullName",
    //       email: "email",
    //       contact: "contact",
    //       studentId: "studentId",
    //       reason: "reason",
    //       experience: "experience",
    //       department: "department",
    //       team: "team",
    //       status: "pending",
    //       createdAt: new Date(),
    //       cvUrl: "cvUrl",
    //     },
    //   ] as Application[],
  };
}
