<script lang="ts">
  import Input from "../input.svelte";
  import CTA from "../cta.svelte";
  import CtaAccent from "../cta-accent.svelte";
  import MdPerson from "svelte-icons/md/MdPerson.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import MdPermIdentity from "svelte-icons/md/MdPermIdentity.svelte";
  import MdPhone from "svelte-icons/md/MdPhone.svelte";

  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";

  export let nMembers: number;
  export let onBack: () => void;
  export let onSuccess: () => void;
</script>

<section
  in:fly={{ duration: 200, y: 32 }}
  class="flex flex-col gap-2 items-start w-full max-w-xl"
>
  <p class="text-slate-700 dark:text-gray-200 text-sm">
    Members:
    <span class="font-bold">{nMembers}</span>
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
    {#each Array.from({ length: nMembers }) as _, index}
      {#if index !== 0}
        <div
          class="h-px w-3/5 self-center border-gray-300 mt-4 mb-8 dark:border-gray-600 border border-dashed"
        />
      {/if}

      <Input
        required
        name={`member-name-${index}`}
        id={`member-name-${index}`}
        label={`Member ${index + 1} Name`}
        placeholder={`Member ${index + 1} Name`}
      >
        <div slot="icon" class="w-5 aspect-square text-gray-400">
          <MdPerson />
        </div>
      </Input>

      <Input
        required
        name={`member-email-${index}`}
        id={`member-email-${index}`}
        label={`Member ${index + 1} Email`}
        placeholder={`Member ${index + 1} Email`}
      >
        <div slot="icon" class="w-5 aspect-square text-gray-400">
          <MdEmail />
        </div>
      </Input>

      <div class="flex w-full gap-4">
        <Input
          required
          name={`member-cnic-${index}`}
          id={`member-cnic-${index}`}
          label={`Member ${index + 1} CNIC`}
          placeholder="0000000000000"
        >
          <div slot="icon" class="w-5 aspect-square text-gray-400">
            <MdPermIdentity />
          </div>
        </Input>
        <Input
          required
          name={`member-phone-${index}`}
          id={`member-phone-${index}`}
          label={`Member ${index + 1} Phone`}
          placeholder="03000000000"
        >
          <div slot="icon" class="w-5 aspect-square text-gray-400">
            <MdPhone />
          </div>
        </Input>
      </div>
    {/each}

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
