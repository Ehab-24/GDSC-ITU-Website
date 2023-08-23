<script lang="ts">
  import type { Member } from "$lib/types";

  export let className: string = "";
  export let member: Member;
</script>

<a
  href={member.link}
  target="_blank"
  class={` dark:bg-slate-800 bg-slate-200 rounded-md p-4 flex-col flex gap-8 w-full h-max ${className}`}
>
  <div class=" w-full gap-4 flex items-center">
    <img
      src="https://loremflickr.com/640/480/nature"
      alt={member.name}
      class=" w-14 aspect-square rounded-full object-cover"
    />
    <section>
      <h3 class=" text-sm font-bold text-gray-700 dark:text-gray-300">
        {member.name}
      </h3>
      <p class=" text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
    </section>
  </div>
  <p class=" text-gray-700 dark:text-gray-300 text-sm">
    {member.bio}
  </p>
</a>
