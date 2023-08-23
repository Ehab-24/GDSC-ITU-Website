<script lang="ts">
  import type { Member } from "$lib/types";
  import MemberCard from "./member-card.svelte";
  import gdsc_itu from "../../assets/img/gdsc-itu.png";

  const members1: Member[] = [
    {
      id: "bscs21049",
      name: "Muhammad Amin",
      position: "GDSC Lead",
      bio: "Don't judge a cover b... don't book a judg... don't cover... Ah! Whatever, just DON'T DO IT!",
      link: "https://tailwindcss.com/",
    },
    {
      id: "bscs21024",
      name: "Ehab Sohail",
      position: "Tech Lead",
      bio: "I am a son, a brother and a father. Father of an unborn child.",
      link: "",
    },
    {
      id: "bscs21099",
      name: "Saad Ahmad",
      position: "Co-Lead",
      bio: "I like drugs. But I fo Leetcode instead.",
      link: "",
    },
  ];
  const members2: Member[] = [
    {
      id: "bscs20013",
      name: "Raja Uzair",
      position: "Events Head",
      bio: "People think I smoke. I ONLY ROCK!",
      link: "",
    },
    {
      id: "bscs21091",
      name: "Muzammil Ali",
      position: "Head Graphic Designer",
      bio: "If I am the one you are looking for, you need glasses.",
      link: "",
    },
    {
      id: "bscs21083",
      name: "Zain Faraz",
      position: "CP Lead",
      bio: "I am Zain Faraz and I have no filter...Except for an air filter, and a water filer and....",
      link: "",
    },
  ];
  const members3: Member[] = [
    {
      id: "bscs21044",
      name: "Muhammad Affan Waseem",
      position: "Marketing Lead",
      bio: "I am the reason ITU's lifts have limits.",
      link: "",
    },
    {
      id: "bscs21084",
      name: "Zain Razzaq",
      position: "General Secretary",
      bio: "Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      link: "",
    },
  ];
</script>

<div class=" w-screen flex flex-col md:flex-row gap-8 md:px-32 xl:px-64 px-4">
  <div class=" w-full mt-4 flex flex-col gap-8">
    {#each members1 as m (m.id)}
      <MemberCard member={m} />
    {/each}
  </div>
  <div class=" w-full flex flex-col gap-8">
    {#each members3 as m (m.id)}
      <MemberCard member={m} />
    {/each}
    <div class="hidden md:block">
      <div class=" h-full grid place-items-center">
        <img
          src={gdsc_itu}
          alt="google developer student club - information technology university"
          class=" w-4/5 self-center"
        />
      </div>
    </div>
  </div>
  <div class=" w-full mt-4 flex flex-col gap-8">
    {#each members2 as m (m.id)}
      <MemberCard member={m} />
    {/each}
  </div>
</div>
