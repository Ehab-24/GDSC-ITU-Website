import type { Application } from "$lib/types";
import { ObjectId, type DeleteResult, type UpdateResult } from "mongodb";
import db from ".";

export async function getApplications(): Promise<Application[]> {
  const applications = await db.collection("applications").find().toArray();
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

export async function deleteApplication(id: string): Promise<DeleteResult> {
  const res = await db
    .collection("applications")
    .deleteOne({ _id: new ObjectId(id) });
  return res;
}
