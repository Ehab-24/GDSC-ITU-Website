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
  class={" rounded-md flex items-center justify-center text-white font-bold bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:hover:bg-gray-500 transition-all " +
    className}
>
  <slot />
</button>
