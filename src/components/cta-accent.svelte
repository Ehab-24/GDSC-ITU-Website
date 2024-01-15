<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let className: string = "";
  export let disabled: boolean = false;
  export let onClick: (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement;
    },
  ) => void = () => {};
</script>

<button
  {type}
  {disabled}
  on:click={onClick}
  class={" rounded-md flex items-center justify-center text-slate-900 dark:text-white font-bold border border-green-500 hover:border-green-600 disabled:border-gray-500 disabled:hover:border-gray-500 transition-all " +
    className}
>
  <slot />
</button>
