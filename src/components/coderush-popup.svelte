<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import CelebrationStar from "../assets/icons/celebration-star.svg";
  import qr_code from "../assets/img/qr_code.png";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import RegisterNowCta from "./register-now-cta.svelte";
  import DottedBgText from "./dotted-bg-text.svelte";

  export let showPopup: boolean;
</script>

{#if showPopup}
  <div
    in:fly
    out:fly={{ easing: quadInOut, y: 60, duration: 150 }}
    class="fixed px-2 md:px-0 top-0 left-0 w-screen h-screen bg-black/50 z-50 flex justify-center items-center"
    on:click={() => (showPopup = false)}
    aria-hidden="true"
  >
    <div
      on:click={(e) => e.stopPropagation()}
      aria-hidden="true"
      class="relative overflow-y-scroll dark:text-gray-300 dark:bg-slate-900 flex items-center p-4 flex-col max-w-xl bg-slate-100 text-gray-700 w-full rounded-md shadow-2xl"
    >
      <div class="flex text-black w-full items-center mb-4 h-min justify-end">
        <button
          on:click={() => (showPopup = false)}
          class="h-6 text-slate-700 dark:text-gray-200"
        >
          <MdClose />
        </button>
      </div>

      <DottedBgText
        ><p class="dark:text-gray-200 text-slate-700">
          Coderush'24
        </p></DottedBgText
      >

      <p
        class="text-center my-12 md:mx-16 text-gray-700 dark:text-gray-300 text-sm"
      >
        We are looking for passionate students who want to learn and grow with
        us. If you are interested in joining GDSC ITU, please fill out the form
        below.
      </p>

      <RegisterNowCta />

      <p
        class="text-xs mb-12 whitespace-nowrap text-gray-500 dark:text-gray-400"
      >
        Compete and challenge you coding skills
      </p>

      <div
        class="flex flex-col md:flex-row gap-6 md:gap-0 w-full justify-between mb-8 items-center md:px-16"
      >
        <img
          src={qr_code}
          alt="coderush24 registraion"
          class="h-40 hidden md:block bg-white rounded-md aspect-square"
        />

        <div class="flex flex-col text-sm items-center md:items-start">
          <h3 class="text-slate-700 dark:text-gray-200 font-bold">
            Registration deadline:
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Wednesday, 28th Feburary 2024
          </p>
        </div>
      </div>

      <div class="flex items-center w-full justify-end gap-3">
        <p class="text-gray-500 dark:text-gray-400 text-xs">google_dsc_itu</p>
        <a
          href="https://www.instagram.com/google_dsc_itu/?hl=en"
          class="h-4 aspect-square text-gray-500 dark:text-gray-400"
          ><FaInstagram /></a
        >
      </div>

      <img
        src={CelebrationStar}
        alt="celebration"
        class="absolute right-16 top-16 h-16 aspect-square"
      />
      <img
        src={CelebrationStar}
        alt="celebration"
        class="absolute left-24 top-60 h-8 aspect-square"
      />
      <img
        src={CelebrationStar}
        alt="celebration"
        class="absolute left-28 top-8 hidden md:block h-20 aspect-square"
      />
    </div>
  </div>
{/if}
