<script lang="ts">
  import CompetitionCard from "../competition-card.svelte";
  import DiCode from "svelte-icons/di/DiCode.svelte";
  import FaGlobe from "svelte-icons/fa/FaGlobe.svelte";
  import type { Competition } from "$lib/types";
  import { fly } from "svelte/transition";

  export let onSelect: (competition: Competition) => void;
</script>

<div in:fly={{ y: 32 }}>
  <h3 class="text-xl text-gray-500 dark:text-gray-400 mb-8">
    Select a competition
  </h3>

  <div class="flex flex-col xl:flex-row w-full gap-12 justify-center mb-12">
    <CompetitionCard onClick={() => onSelect("cp")}>
      <div class="flex flex-col gap-4 p-4">
        <div class="flex mb-4 items-center gap-2">
          <div
            class="p-1 w-8 aspect-square rounded-md bg-white/[0.03] text-gray-200"
          >
            <DiCode />
          </div>
          <p class="text-slate-700 dark:text-gray-200">
            Competitive Programming
          </p>
        </div>

        <p class="text-sm mb-4 text-gray-500 dark:text-gray-400 text-start">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
        </p>

        <div class="flex flex-col gap-2 items-start">
          <p class="text-gray-700 dark:text-gray-200 text-sm">Timeline:</p>
          <div class="flex w-full gap-2">
            <div
              class="min-h-full scale-y-[0.8] w-px bg-gray-500/50 dark:bg-gray-400/50"
            />
            <div class="flex items-start flex-col gap-2">
              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>

              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>

              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </CompetitionCard>

    <CompetitionCard onClick={() => onSelect("web")}>
      <div class="flex flex-col gap-4 p-4">
        <div class="flex mb-4 items-center gap-2">
          <div
            class="p-2 w-8 aspect-square rounded-md bg-white/[0.03] text-gray-200"
          >
            <FaGlobe />
          </div>
          <p class="text-slate-700 dark:text-gray-200">Web Development</p>
        </div>

        <p class="text-sm mb-4 text-gray-500 dark:text-gray-400 text-start">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
        </p>

        <div class="flex flex-col gap-2 items-start">
          <p class="text-gray-700 dark:text-gray-200 text-sm">Timeline:</p>
          <div class="flex w-full gap-2">
            <div
              class="min-h-full scale-y-[0.8] w-px bg-gray-500/50 dark:bg-gray-400/50"
            />
            <div class="flex items-start flex-col gap-2">
              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>

              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>

              <div
                class="text-gray-500 -translate-x-3 dark:text-gray-400 text-sm items-center flex gap-2"
              >
                <div
                  class="rounded-full w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400"
                />
                Round 1 - 10th Feb 10:00 AM to 1:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </CompetitionCard>
  </div>
</div>
