<script lang="ts">
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="rounded-md shadow-2xl shadow-black/10 dark:shadow-gray-200/[0.03] border border-gray-400 dark:border-slate-700 bg-white/[0.03]"
>
  <slot />
</button>
