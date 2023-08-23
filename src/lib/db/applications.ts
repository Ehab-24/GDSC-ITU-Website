import type { Application } from "$lib/types";
import { ObjectId, type UpdateResult } from "mongodb";
import db from ".";

export async function getApplications(): Promise<Application[]> {
  const applications = await db
    .collection("applications")
    .find()
    .project({ reason: 0, experience: 0 })
    .toArray();
  applications.forEach((a) => (a._id = a._id.toHexString()));
  return applications as Application[];
}

export async function updateApplicationStatus(
  id: string,
  status: string
): Promise<UpdateResult> {
  const res = await db
    .collection("applications")
    .updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  return res;
}
