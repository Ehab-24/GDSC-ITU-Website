<script lang="ts">
    export let classname: string = "";
    export let image: string;
    export let isSelected: boolean;
    export let onSelect: () => void;

    let isHovering: boolean = false;
</script>

<img
    loading="lazy"
    draggable="false"
    class="rounded-sm shadow-black/30 shadow-lg top-0 z-10 right-0 h-full w-full object-cover cursor-pointer ${classname}"
    src={image}
    alt="coderush"
    style={isHovering || isSelected
        ? "filter: contrast(125%) saturate(150%)"
        : "filter: contrast(75%) saturate(80%)"}
    on:mouseenter={() => (isHovering = true)}
    on:mouseleave={() => (isHovering = false)}
    on:click={onSelect}
/>

<style>
    img {
        transition: filter 0.3s;
    }
</style>
