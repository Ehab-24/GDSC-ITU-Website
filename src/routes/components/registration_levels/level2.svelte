<script lang="ts">
  import Input from "../input.svelte";
  import MdGroup from "svelte-icons/md/MdGroup.svelte";
  import MdDiscFull from "svelte-icons/md/MdDiscFull.svelte";
  import FaBuilding from "svelte-icons/fa/FaBuilding.svelte";
  import CTA from "../cta.svelte";
  import CtaAccent from "../cta-accent.svelte";
  import { fly } from "svelte/transition";
  import { enhance } from "$app/forms";

  export let onSuccess: () => void;
  export let onBack: () => void;
</script>

<section
  in:fly={{ duration: 200, y: 32 }}
  class="flex flex-col gap-2 items-start w-full max-w-xl"
>
  <p class="text-slate-700 dark:text-gray-200 text-sm">
    Registration charges:
    <span class="font-bold">Rs. 1200 per person</span>
  </p>

  <form
    method="POST"
    class="mt-8 flex flex-col items-start w-full"
    use:enhance={() => {
      return async () => {
        onSuccess();
      };
    }}
  >
    <Input
      required
      name="team-name"
      id="team-name"
      label="Team Name"
      placeholder="Team Name"
    >
      <div slot="icon" class="w-5 aspect-square text-gray-400">
        <MdGroup />
      </div>
    </Input>

    <Input
      required
      name="institute"
      id="institute"
      label="Institute"
      placeholder="Institute"
    >
      <div slot="icon" class="w-5 aspect-square text-gray-400">
        <FaBuilding />
      </div>
    </Input>

    <Input
      required
      name="ambassador-code"
      id="ambassador-code"
      label="Ambassador/Discount Code"
      placeholder="CRXXXX"
    >
      <div slot="icon" class="w-5 aspect-square text-gray-400">
        <MdDiscFull />
      </div>
    </Input>

    <div class="flex justify-end w-full gap-4">
      <CtaAccent
        onClick={onBack}
        className=" px-6 whitespace-nowrap h-10 self-end">Back</CtaAccent
      >
      <CTA type="submit" className=" px-6 whitespace-nowrap h-10 self-end"
        >Submit</CTA
      >
    </div>
  </form>
</section>
