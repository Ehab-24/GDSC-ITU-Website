<script>
  import CTA from "./CTA.svelte";
  import Card from "./card.svelte";
</script>

<nav
  class=" flex justify-between w-full h-20 items-center px-4 md:px-12 xl:px-24"
>
  <h1
    class=" w-[272px] text-3xl text-white whitespace-nowrap font-bold tracking-tight"
  >
    Payflow
  </h1>

  <Card className=" py-2 px-8">
    <ul class=" flex gap-12 text-white">
      <li class=" hover:text-sky-300 transition-all cursor-pointer">Home</li>
      <li class=" hover:text-sky-300 transition-all cursor-pointer">
        Products
      </li>
      <li class=" hover:text-sky-300 transition-all cursor-pointer">Pricing</li>
      <li class=" hover:text-sky-300 transition-all cursor-pointer">Contact</li>
    </ul>
  </Card>

  <div class=" h-10 flex gap-4">
    <button
      class=" w-32 h-full hover:bg-sky-500/20 rounded-md flex items-center justify-center text-white font-bold cursor-pointer transition-all"
      >Log In</button
    >
    <CTA className=" w-32">Sign up</CTA>
  </div>
</nav>
