<script lang="ts">
  export let checked: boolean = false;
</script>

<div class=" w-full flex gap-12 justify-between items-center">
  <div
    class={`${
      checked ? "text-sky-300" : "text-slate-300"
    } h-6 w-full flex gap-2 items-center transition-all`}
  >
    <div class=" w-6 aspect-square">
      <slot />
    </div>
    <div
      class={`${
        checked ? "bg-sky-200/80" : "bg-slate-400"
      } rounded-full h-3 w-full transition-all`}
    />
  </div>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" bind:checked />
    <div
      class="w-11 h-6 bg-slate-300 rounded-full peer ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"
    />
  </label>
</div>
