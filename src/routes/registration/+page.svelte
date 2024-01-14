<script lang="ts">
  import DottedBgText from "../components/dotted-bg-text.svelte";
  import LevelIndicator from "../components/level-indicator.svelte";
  import Level1 from "../components/registration_levels/level1.svelte";
  import Level2 from "../components/registration_levels/level2.svelte";
  import Level3 from "../components/registration_levels/level3.svelte";

  type Competition = "cp" | "web";

  let currentLevel = 1;
  let currentCompetition: Competition | null = null;

  function handleBack() {
    currentLevel -= 1;
  }

  function handleCompetitionSelect(competition: Competition) {
    currentCompetition = competition;
    currentLevel = 2;
  }
</script>

<main class="flex flex-col px-4 md:px-40 py-20 xl:px-80 items-center">
  <DottedBgText>
    <p class="leading-relaxed dark:text-gray-200 text-slate-700">
      Coderush'24<br />Registration
    </p>
  </DottedBgText>

  <p
    class="text-sm text-center text-gray-500 dark:text-gray-400 leading-loose px-4 md:px-0"
  >
    For detailed information of competitions, please visit the Competitions
    page. For any kind of issues or help, please contact us at web@softec.org.pk
  </p>

  <div class="flex justify-between mb-20 w-full max-w-3xl mt-12 px-4 md:px-0">
    <LevelIndicator isSelected={currentLevel === 1} />
    <div class="h-px w-[45%] bg-gray-500/50 dark:bg-gray-400/50" />
    <LevelIndicator isSelected={currentLevel === 2} />
    <div class="h-px w-[45%] bg-gray-500/50 dark:bg-gray-400/50" />
    <LevelIndicator isSelected={currentLevel === 3} />
  </div>

  {#if currentLevel === 1}
    <Level1 onSelect={handleCompetitionSelect} />
  {:else if currentLevel === 2}
    <Level2 onSuccess={() => (currentLevel = 3)} onBack={handleBack} />
  {:else if currentLevel === 3}
    <Level3
      nMembers={2}
      onSuccess={() => (currentLevel = 3)}
      onBack={handleBack}
    />
  {/if}

  <div class="flex w-full justify-evenly"></div>
</main>
