<script lang="ts">
  import MdError from "svelte-icons/md/MdError.svelte";
  import { quadOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";

  export let text: string;
</script>

<div
  in:fade={{ duration: 200, easing: quadOut }}
  out:fly={{ easing: quadOut, y: 60, duration: 200 }}
  class=" fixed w-max bottom-8 left-1/2 flex items-center gap-4 justify-center -translate-x-1/2 shadow-2xl shadow-black/20 dark:shadow-white/10 rounded-md bg-slate-200 z-[60] dark:bg-slate-800 p-4"
>
  <div
    class=" w-8 p-2 text-slate-200 bg-red-500 rounded-full grid place-items-center"
  >
    <MdError />
  </div>
  <p class=" text-sm text-gray-700 dark:text-gray-200">{text}</p>
</div>
