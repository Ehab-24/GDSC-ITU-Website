<script lang="ts">
  import type {
    ChangeEventHandler,
    KeyboardEventHandler,
  } from "svelte/elements";
  import FaStarOfLife from "svelte-icons/fa/FaStarOfLife.svelte";

  export let value: string | number | undefined;
  export let disabled: boolean = false;
  export let id: string;
  export let name: string;
  export let label: string;
  export let placeholder: string;
  export let required: boolean = false;
  export let onChange: ChangeEventHandler<HTMLInputElement> | undefined | null =
    undefined;
  export let onKeyDown:
    | KeyboardEventHandler<HTMLInputElement>
    | undefined
    | null = undefined;
</script>

<div class="w-full">
  <label
    for={id}
    class="flex items-center gap-1 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >{label}
    {#if required}
      <div class="w-2 font-normal text-red-500 dark:text-sky-400 aspect-square">
        <FaStarOfLife />
      </div>
    {/if}
  </label>
  <div class="relative mb-6">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
    >
      <slot name="icon" />
    </div>

    <input
      on:change={onChange}
      on:keydown={onKeyDown}
      bind:value
      {disabled}
      {id}
      {name}
      {required}
      class=" border border-gray-400 dark:border-gray-700 text-gray-700 text-sm rounded-lg ring-0 focus:border-green-600 block w-full pl-10 p-2.5 bg-black/[0.03] dark:bg-white/[0.03] dark:placeholder-gray-400 dark:text-gray-300 outline-0 transition-all"
      {placeholder}
    />
  </div>
</div>
