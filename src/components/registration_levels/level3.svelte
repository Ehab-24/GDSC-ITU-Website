<script lang="ts">
  import { fly } from "svelte/transition";
  import type { RegistrationData } from "$lib/types";
  import TeamMembersForm from "./team-members-form.svelte";

  type SubmissionData = RegistrationData["teamMembers"];

  export let onBack: () => void;
  export let onSubmit: (data: SubmissionData) => void;
  export let registrationData: RegistrationData;
</script>

<section
  in:fly={{ duration: 200, y: 32 }}
  class="flex mb-8 flex-col gap-2 items-start w-full max-w-xl"
>
  <p class="text-slate-700 dark:text-gray-200 text-sm">
    Members:
    <span class="font-bold">{registrationData.teamMembers.length}</span>
  </p>

  <div class="mt-8 flex flex-col items-start w-full">
    <TeamMembersForm
      initialMembers={registrationData.teamMembers}
      {onSubmit}
      {onBack}
    />
  </div>
</section>
