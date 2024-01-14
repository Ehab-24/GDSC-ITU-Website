<script lang="ts">
  import { fade } from "svelte/transition";

  export let isSelected: boolean;
</script>

<div class="relative bg-white">
  {#if isSelected}
    <div
      transition:fade={{ duration: 150 }}
      class="w-6 aspect-square absolute top-1/2 -translate-y-[60%] left-1/2 -translate-x-1/2 bg-green-500/75 rounded-full"
    ></div>
  {/if}
  <div
    class={`w-3 aspect-square absolute left-1/2 transition-all -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full ${
      isSelected
        ? "dark:bg-gray-200 bg-slate-700"
        : "dark:bg-gray-500 bg-slate-400"
    }`}
  ></div>
</div>
