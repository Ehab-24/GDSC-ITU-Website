<script lang="ts">
    import SelectableImage from "./selectable-image.svelte";

    export let classname: string = "";
    export let images: string[];
    export let title: string;
    export let description: string;
    export let reverse: boolean = false;

    let selectedImage = images[0];
</script>

<div
    class={`gap-4 md:gap-8 xl:gap-12 w-full h-full px-4 md:px-12 xl:px-20 ${reverse ? "flex flex-col md:flex-row-reverse" : "flex flex-col md:flex-row"} ${classname}`}
>
    <div class="hidden md:flex w-full md:w-[45%] aspect-square">
        <img
            loading="lazy"
            draggable="false"
            class="rounded-sm pointer-events-none top-0 z-10 right-0 h-full w-full object-contain"
            src={selectedImage}
            alt="coderush"
            style="filter: contrast(125%) saturate(150%)"
        />
    </div>
    <div
        class={`flex flex-col gap-12 w-full md:w-[55%] justify-center aspect-square`}
    >
        <div class="text-start flex flex-col">
            <h2
                class="mg-4 md:mb-8 w-full text-4xl md:text-5xl font-black text-zinc-700 dark:text-white tracking-tight"
            >
                {title}
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-sm">
                {description}
            </p>
        </div>
        <img
            loading="lazy"
            draggable="false"
            class="md:hidden rounded-sm pointer-events-none top-0 z-10 right-0 h-min w-full object-contain"
            src={selectedImage}
            alt="coderush"
            style="filter: contrast(125%) saturate(150%)"
        />
        <div
            class="grid grid-cols-2 md:flex md:flex-wrap items-center gap-2 w-full"
        >
            {#each images as img (img)}
                <SelectableImage
                    classname="w-[80px] md:w-[144px] max-h-32 min-h-28"
                    image={img}
                    isSelected={img == selectedImage}
                    onSelect={() => (selectedImage = img)}
                />
            {/each}
        </div>
    </div>
</div>
