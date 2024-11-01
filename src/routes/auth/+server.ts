import {
  deleteApplication,
  updateApplicationStatus,
} from "$lib/db/applications";
import { json } from "@sveltejs/kit";

export async function PATCH({ url }) {
  const newStatus = url.searchParams.get("status");
  const id = url.searchParams.get("id");
  const res = await updateApplicationStatus(id!, newStatus!);
  return json(res, { status: 200 });
}

export async function DELETE({ url }) {
  const id = url.searchParams.get("id");
  const res = await deleteApplication(id!);
  return json(res, { status: 200 });
}
