import { getApplications } from "$lib/db/applications";

export const ssr = true;

export async function load() {
  return {
    applications: await getApplications(),
  };
}
