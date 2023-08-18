<script lang="ts">
  export let className: string = "";
</script>

<div
  class={" border-2 border-slate-700 rounded-md bg-gradient-to-tr from-slate-900 from-50% to-slate-950 p-4" +
    className}
>
  <slot />
</div>
