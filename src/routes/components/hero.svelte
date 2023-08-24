<script lang="ts">
  import beams from "../../assets/img/0-beams.webp";
  import CTA from "./cta.svelte";
</script>

<div
  class=" w-screen min-h-[90vh] md:min-h-[70vh] md:h-[70vh] overflow-x-hidden grid grid-cols-[24] grid-rows-[13] bg-grid"
  style="mask-image: linear-gradient(to bottom, transparent, black);
  webkit-mask-image: linear-gradient(to bottom, transparent, black);"
>
  <!-- background -->
  <div
    class=" absolute w-screen min-h-[90vh] md:min-h-[70vh] md:h-[70vh] overflow-hidden"
  >
    <img
      alt="hero background"
      src={beams}
      class="opacity-30 w-screen min-h-[90vh] md:min-h-[70vh] md:h-[70vh] scale-x-[2] md:scale-x-150 rotate-90 md:rotate-0"
    />
  </div>
  <div
    class=" absolute w-screen bottom-0 left-0 -translate-x-1/2 translate-y-1/3"
  />

  <!-- main content -->
  <main
    class=" absolute mt-10 px-4 md:px-0 md:mt-0 w-screen min-h-[90vh] md:min-h-[70vh] md:h-[70vh] flex flex-col justify-center gap-32 pb-20"
  >
    <div
      class=" flex flex-col gap-12 w-full md:w-2/3 xl:w-2/5 self-center h-full justify-end md:justify-end items-center"
    >
      <h1
        class=" text-6xl md:text-7xl font-bold text-center text-zinc-700 dark:text-white tracking-tight"
      >
        <span class=" text-blue-700">G</span>oogle
        <span class=" text-red-600">D</span>eveloper
        <span class=" text-yellow-500">S</span>tudent
        <span class=" text-green-700">C</span>lub
      </h1>
      <p
        class=" dark:text-[#bababa] text-sm md:text-base text-slate-500 text-center tracking-wide"
      >
        Unleash innovation with the exceptional Google Developer Student Club at
        <span class=" font-mono font-bold text-green-500 dark:text-green-400"
          >Information Technology University</span
        >. Join our expert core team on a journey of tech exploration and
        empowerment.
      </p>

      <CTA
        className="w-48 h-12"
        onClick={() => {
          document
            .getElementById("application-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }}>Apply Now</CTA
      >
    </div>
  </main>
</div>
