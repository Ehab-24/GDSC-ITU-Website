<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  const deadline = new Date("2024-02-28T23:59:59");

  let interval: any;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  function updateCountdown() {
    const currentDate = new Date();
    const diff = deadline.getTime() - currentDate.getTime();

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((diff / (1000 * 60)) % 60);
    seconds = Math.floor((diff / 1000) % 60);
  }
  updateCountdown();

  onMount(() => {
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if deadline > new Date()}
  <div
    class="flex flex-wrap justify-center text-4xl md:text-6xl font-black text-slate-700 dark:text-gray-200 gap-4 md:gap-8"
  >
    <div class="w-16 text-center flex flex-col gap-2">
      {days}
      <span class="text-sm font-normal">DAYS</span>
    </div>
    :
    <div class="w-16 text-center flex flex-col gap-2">
      {hours}
      <span class="text-sm font-normal">HOURS</span>
    </div>
    :
    <div class="w-16 text-center flex flex-col gap-2">
      {minutes}
      <span class="text-sm font-normal">MINS</span>
    </div>
    :
    <div class="w-16 text-center flex flex-col gap-2">
      {seconds}
      <span class="text-sm font-normal">SECS</span>
    </div>
  </div>
{:else}
  <p class="text-3xl md:text-6xl text-red-500 dark:text-red-400 font-bold">
    The Deadline has passed
  </p>
{/if}
