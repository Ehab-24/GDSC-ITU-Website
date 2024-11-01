<script lang="ts">

    export let onClick: () => void;

</script>

<div class="relative w-[220px] h-[60px]">
    <svg
        width="140"
        height="60"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <polygon points="0,10 110,0 140,60 0,50" fill="rgb(21,128,61)" />
    </svg>
    <svg
        width="180"
        height="60"
        class="absolute dark:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <polygon
            points="1,10 180,10 165,50 1,50"
            fill="white"
            stroke="rgb(15,23,42)"
            stroke-width="1"
        />
    </svg>
    <svg
        width="180"
        height="60"
        class="absolute hidden dark:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <polygon
            points="1,10 180,10 165,50 1,50"
            fill="rgb(15,23,42)"
            stroke="white"
            stroke-width="1"
        />
    </svg>
    <button
        on:click={onClick}
        class="text-3xl neon-text dark:hidden tracking-tight text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap font-normal shadow-white"
    >
        REGISTER NOW!!
    </button>
    <button
        on:click={onClick}
        class="text-3xl neon-text-dark hidden dark:block tracking-tight text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap font-normal shadow-white"
    >
        REGISTER NOW!!
    </button>
</div>
