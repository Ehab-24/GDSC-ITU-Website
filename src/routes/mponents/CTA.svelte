<script lang="ts">
  export let className: string = "";
  export let disabled: boolean = false;
</script>

<button
  {disabled}
  class={" rounded-md flex items-center justify-center text-white font-bold bg-sky-500 hover:bg-sky-600 transition-all " +
    className}
>
  <slot />
</button>
