<script lang="ts">
  export let id: string;
  export let placeholder: string;
  export let name: string;
  export let required: boolean = false;
</script>

<textarea
  {id}
  {name}
  {required}
  class=" w-full h-48 p-4 bg-black/[0.03] dark:bg-white/[0.03] border-2 dark:border-gray-700 border-gray-300 focus:border-green-600 ring-0 outline-0 rounded-md transition-all text-gray-700 dark:text-gray-300 caret-gray-700 dark:caret-gray-300"
  {placeholder}
/>
