<script lang="ts">
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="rounded-md border border-gray-300 dark:border-slate-700 bg-white/[0.03]"
>
  <slot />
</button>
