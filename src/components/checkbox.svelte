<script lang="ts">
    export let id: string;
    export let name: string;
    export let value: string;
</script>

<div class="flex items-center gap-2">
    <input
        checked={false}
        {id}
        type="checkbox"
        {value}
        {name}
        class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 ring-0 dark:ring-offset-gray-800 accent-green-600 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
        for={id}
        class="whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"
        ><slot /></label
    >
</div>
