<script lang="ts">
  export let id: string;
  export let name: string;
  export let label: string;
  export let placeholder: string;
  export let type: string = "text";
  export let required: boolean = false;
</script>

<div>
  <label
    for={id}
    class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >{label}</label
  >
  <div class="relative mb-6">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
    >
      <slot name="icon" />
    </div>
    <input
      {type}
      {id}
      {name}
      {required}
      class=" border border-gray-300 dark:border-gray-700 text-gray-700 text-sm rounded-lg ring-0 focus:border-green-600 block w-full pl-10 p-2.5 bg-black/[0.03] dark:bg-white/[0.03] dark:placeholder-gray-400 dark:text-gray-300 outline-0 transition-all"
      {placeholder}
    />
  </div>
</div>
