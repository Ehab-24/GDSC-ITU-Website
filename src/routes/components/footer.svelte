<script lang="ts">
  import gdsc_logo from "../../assets/img/gdsc-logo.webp";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
</script>

<!-- <footer -->
<!--   class=" w-full flex flex-col gap-6 justify-end items-center pb-12 px-4 md:px-20 xl:px-40" -->
<!-- > -->
<!--   <div class=" w-1/2 bg-gray-300 h-px mb-12" /> -->
<!---->
<!--   <div class=" w-full flex justify-center items-center gap-6"> -->
<!--     <a -->
<!--       target="_blank" -->
<!--       href="https://gdsc.community.dev/information-technology-university/" -->
<!--     > -->
<!--       <img -->
<!--         loading="lazy" -->
<!--         src={gdsc_logo} -->
<!--         alt="GDSC ITU community website" -->
<!--         class=" w-6 aspect-square md:grayscale hover:grayscale-0 transition-all" -->
<!--       /> -->
<!--     </a> -->
<!--     <a -->
<!--       href="https://www.linkedin.com/company/dsc-itu/?originalSubdomain=pk" -->
<!--       target="_blank" -->
<!--       class=" w-5 text-[#0072b1] md:text-gray-500 hover:text-[#0072b1] dark:text-gray-400 transition-all" -->
<!--     > -->
<!--       <p class=" sr-only"> -->
<!--         google developers student club - information technology university -->
<!--       </p> -->
<!--       <FaLinkedin /> -->
<!--     </a> -->
<!--   </div> -->
<!---->
<!--   <p class=" text-sm text-gray-500 dark:text-gray-400"> -->
<!--     Developed by GDSC Tech Lead <span -->
<!--       class=" text-gray-700 dark:text-gray-300 hover:text-green-500 transition-all font-bold" -->
<!--       ><a target="_blank" href="https://portfolio-ehab-24.vercel.app/" -->
<!--         >Ehab Sohail</a -->
<!--       ></span -->
<!--     > -->
<!--   </p> -->
<!-- </footer> -->

<footer class="w-full py-20 flex justify-center">
  <div class="max-w-3xl w-full flex flex-col gap-32">
    <div class="flex w-full justify-between">
      <div class="flex flex-col gap-3 w-3/4">
        <p class="text-5xl font-black text-gray-200">Be our sponser.</p>
        <p class="text-base text-gray-200">gdsc@itu.edu.pk</p>
      </div>

      <div class="w-1/4">
        <div
          class="rounded-full w-20 -translate-x-1/2 aspect-square bg-green-500"
          style="clip-path: polygon(0 0%, 50% 0, 50% 100%, 0 100%);"
        />
      </div>
    </div>

    <div class="flex w-full">
      <p class="w-full text-sm dark:text-gray-400">
        © 2024 GDSC ITU.<br />All rights reserved
      </p>

      <div class="w-full flex">
        <div class="w-full flex flex-col gap-3">
          <a
            class="text-sm text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://www.instagram.com/google_dsc_itu/?hl=en">Instagram</a
          >
          <a
            class="text-sm text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://www.linkedin.com/company/dsc-itu/?originalSubdomain=pk"
            >Linkedin</a
          >
          <a
            class="text-sm text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://gdsc.community.dev/information-technology-university/"
            >Community</a
          >
        </div>
        <div class="w-full flex flex-col gap-3">
          <a
            class="text-sm text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://www.instagram.com/google_dsc_itu/?hl=en">Instagram</a
          >
          <a
            class="text-sm text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://www.linkedin.com/company/dsc-itu/?originalSubdomain=pk"
            >Linkedin</a
          >
          <a
            class="text-sm text-gray-400 dark:hover:text-gray-200 hover:text-slate-700 transition-all"
            href="https://gdsc.community.dev/information-technology-university/"
            >Community</a
          >
        </div>
      </div>
    </div>
  </div>
</footer>
