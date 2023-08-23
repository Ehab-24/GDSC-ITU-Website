<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";

  export let text: string;
</script>

<div
  transition:fly={{ easing: quadInOut, y: 60 }}
  class=" fixed bottom-8 left-1/2 flex items-center gap-4 justify-center -translate-x-1/2 shadow-2xl shadow-black/20 dark:shadow-white/10 rounded-md bg-slate-200 z-[60] dark:bg-slate-800 py-4 px-12"
>
  <div
    class=" w-8 p-2 text-slate-200 bg-green-500 rounded-full grid place-items-center"
  >
    <FaCheck />
  </div>
  <p class=" font-bold text-gray-700 dark:text-gray-300">
    {text}
  </p>
</div>
