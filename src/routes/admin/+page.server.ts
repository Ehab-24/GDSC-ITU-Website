import { getApplications } from "$lib/db/applications";
export async function load() {
  const applications = await getApplications();
  return {
    applications,
  };
}
