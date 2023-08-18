<script lang="ts">
  import "../app.css";
  import Navbar from "./mponents/navbar.svelte";
</script>

<div class=" min-h-screen h-full w-full">
  <div class=" fixed top-0 w-full z-50">
    <Navbar />
  </div>
  <slot />
</div>
