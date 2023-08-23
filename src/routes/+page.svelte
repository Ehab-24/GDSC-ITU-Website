<script lang="ts">
  import ApplicationForm from "./components/application-form.svelte";
  import Hero from "./components/hero.svelte";
  import Members from "./components/members.svelte";

  import beams from "../assets/img/1-beams.webp";
  import ToastSuccess from "./components/toast-success.svelte";
  import ToastError from "./components/toast-error.svelte";

  export let form;
  export let success: boolean = false;
  export let error: boolean = false;

  function showSuccess() {
    success = true;
    setTimeout(() => {
      success = false;
    }, 3000);
  }
  function showError() {
    error = true;
    setTimeout(() => {
      error = false;
    }, 3000);
  }

  $: {
    if (form?.success) {
      showSuccess();
    } else if (form?.success === false) {
      showError();
    }
  }
</script>

{#if success}
  <ToastSuccess text="Application Recieved!" />
{/if}
{#if error}
  <ToastError text="Oops! An Error Occurred." />
{/if}

<div
  class=" w-screen flex flex-col gap-40 overflow-x-hidden bg-slate-100 dark:bg-slate-900"
>
  <Hero />
  <Members />
  <div
    class=" w-full h-max relative overflow-hidden py-20"
    style="mask-image: linear-gradient(to top, transparent, black); webkit-mask-image: linear-gradient(to top, transparent, black"
  >
    <div
      class=" w-full pointer-events-none dark:opacity-50 h-full absolute grid grid-cols-[24] grid-rows-[13] bg-grid"
    />
    <img
      draggable="false"
      class=" absolute pointer-events-none top-0 z-10 right-0 h-full w-full md:w-1/2 rotate-45 hue-rotate-180"
      src={beams}
      alt="beams"
    />
    <ApplicationForm className="z-50" />
  </div>
</div>
