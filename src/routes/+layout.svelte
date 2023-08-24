<script lang="ts">
  import "../app.css";
  import Footer from "./components/footer.svelte";
</script>

<div class=" min-h-screen bg-slate-100 dark:bg-slate-900 h-full w-full">
  <slot />
  <Footer />
</div>
