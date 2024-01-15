<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  const deadline = new Date("2024-02-08T16:00:00");

  let interval: NodeJS.Timeout;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  function updateCountdown() {
    const currentDate = new Date();
    const diff = deadline.getTime() - currentDate.getTime();

    hours = Math.floor(diff / (1000 * 60 * 60));
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

<div
  class="flex text-4xl md:text-5xl font-black text-slate-700 dark:text-gray-200 gap-4 md:gap-8"
>
  <p class="w-16 h-10 text-center">{hours}</p>
  :
  <p class="w-16 h-10 text-center">{minutes}</p>
  :
  <p class="w-16 h-10 text-center">{seconds}</p>
</div>
