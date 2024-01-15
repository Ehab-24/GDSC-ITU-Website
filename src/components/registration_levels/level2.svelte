<script lang="ts">
  import Input from "../input.svelte";
  import MdGroup from "svelte-icons/md/MdGroup.svelte";
  import TiSortNumerically from "svelte-icons/ti/TiSortNumerically.svelte";
  import MdDiscFull from "svelte-icons/md/MdDiscFull.svelte";
  import FaBuilding from "svelte-icons/fa/FaBuilding.svelte";
  import CTA from "../cta.svelte";
  import CtaAccent from "../cta-accent.svelte";
  import { fly } from "svelte/transition";
  import type { RegistrationData } from "$lib/types";
  import { writable } from "svelte/store";

  type SubmissionData = {
    teamName: string;
    institute: string;
    ambassadorCode: string | undefined;
    nMembers: number;
  };

  export let onSubmit: (data: SubmissionData) => void;
  export let onBack: () => void;
  export let registrationData: RegistrationData;

  let data = writable<SubmissionData>({
    teamName: registrationData.teamName,
    institute: registrationData.institute,
    ambassadorCode: registrationData.ambassadorCode,
    nMembers: registrationData.nMembers,
  });

  $: console.log(data);
</script>

<section
  in:fly={{ duration: 200, y: 32 }}
  class="flex mb-8 flex-col gap-2 items-start w-full max-w-xl"
>
  <p class="text-slate-700 dark:text-gray-200 text-sm">
    Registration charges:
    <span class="font-bold">Rs. 1200 per person</span>
  </p>

  <form
    class="mt-8 flex flex-col items-start w-full"
    on:submit={() =>
      onSubmit({
        teamName: $data.teamName,
        institute: $data.institute,
        ambassadorCode: $data.ambassadorCode,
        nMembers: $data.nMembers,
      })}
  >
    <Input
      required
      onChange={(e) => ($data.teamName = e.target?.value ?? "")}
      value={$data.teamName}
      name="team-name"
      id="team-name"
      label="Team Name"
      placeholder="Team Name"
    >
      <div
        slot="icon"
        class="w-5 aspect-square text-gray-500 dark:text-gray-400"
      >
        <MdGroup />
      </div>
    </Input>

    <Input
      required
      onChange={(e) => ($data.institute = e.target?.value ?? "")}
      value={$data.institute}
      name="institute"
      id="institute"
      label="Institute"
      placeholder="Institute"
    >
      <div
        slot="icon"
        class="w-5 aspect-square text-gray-500 dark:text-gray-400"
      >
        <FaBuilding />
      </div>
    </Input>

    <div class="flex gap-4 w-full">
      <Input
        value={$data.ambassadorCode}
        onChange={(e) => ($data.ambassadorCode = e.target?.value ?? "")}
        name="ambassador-code"
        id="ambassador-code"
        label="Ambassador/Discount Code"
        placeholder="CRXXXX"
      >
        <div
          slot="icon"
          class="w-5 aspect-square text-gray-500 dark:text-gray-400"
        >
          <MdDiscFull />
        </div>
      </Input>

      <Input
        required
        value={$data.nMembers}
        onChange={(e) =>
          ($data.nMembers = Number.isInteger(+e.target?.value)
            ? +e.target?.value
            : 0)}
        name="n-members"
        id="n-members"
        label="Number of Members"
        placeholder="1"
      >
        <div
          slot="icon"
          class="w-5 aspect-square text-gray-500 dark:text-gray-400"
        >
          <TiSortNumerically />
        </div>
      </Input>
    </div>

    <div class="flex justify-end w-full gap-4">
      <CtaAccent
        onClick={onBack}
        className=" px-6 whitespace-nowrap h-10 self-end">Back</CtaAccent
      >
      <CTA type="submit" className=" px-6 whitespace-nowrap h-10 self-end"
        >Next</CTA
      >
    </div>
  </form>
</section>
