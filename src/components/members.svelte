<script lang="ts">
  import type { Member } from "$lib/types";
  import MemberCard from "./member-card.svelte";
  import gdsc_itu from "../assets/img/gdsc-itu.webp";
  import aminYayha from "../assets/img/amin-yahya.jpg";
  import affanWaseem from "../assets/img/affan-waseem.webp";
  import zainFaraz from "../assets/img/zain-faraz.webp";
  import zainRazzaq from "../assets/img/zain-razzaq.webp";
  import rajaUzair from "../assets/img/raja-uzair.webp";
  import saadAhmad from "../assets/img/saad-ahmad.webp";
  import muzamilAli from "../assets/img/muzamil-ali.webp";
  import me from "../assets/img/ehab-sohail.webp";

  const members1: Member[] = [
    {
      id: "bscs21049",
      name: "Muhammad Amin",
      image: aminYayha,
      position: "GDSC Lead",
      bio: "Don't judge a cover b... don't book a judg... don't cover... Ah! Whatever, just DON'T DO IT!",
      link: "https://www.linkedin.com/in/muhammadaminyahya/",
    },
    {
      id: "bscs21099",
      name: "Saad Ahmad",
      image: saadAhmad,
      position: "Co-Lead",
      bio: "I like drugs. But I do Leetcode instead.",
      link: "https://www.linkedin.com/in/saadxahmed/",
    },
    {
      id: "bscs21024",
      name: "Ehab Sohail",
      image: me,
      position: "Tech Lead",
      bio: "I am a son, a brother and a father. A father of an unborn child.",
      link: "https://portfolio-ehab-24.vercel.app/",
    },
  ];
  const members2: Member[] = [
    {
      id: "bscs20013",
      name: "Raja Uzair",
      image: rajaUzair,
      position: "Events Head",
      bio: "People think I smoke. I ONLY ROCK!",
      link: "https://www.linkedin.com/in/raja-uzair-a9141927b/",
    },
    {
      id: "bscs21091",
      name: "Muzamil Ali",
      image: muzamilAli,
      position: "Head Graphic Designer",
      bio: "If I am the one you are looking for, you need glasses.",
      link: "https://www.linkedin.com/in/muzamil-ali-585695218",
    },
    {
      id: "bscs21083",
      name: "Zain Faraz",
      image: zainFaraz,
      position: "CP Lead",
      bio: "I am Zain Faraz, I like technical shit and I have no filter...Except for an air filter, and a water filter and....",
      link: "https://www.linkedin.com/in/muhammad-zain-faraz-769101247/",
    },
  ];
  const members3: Member[] = [
    {
      id: "bscs21044",
      name: "Muhammad Affan Waseem",
      image: affanWaseem,
      position: "Marketing Lead",
      bio: "I am the reason ITU's lifts have limits.",
      link: "https://www.linkedin.com/in/muhammad-affan-waseem-60009b1b2/",
    },
    {
      id: "bscs21084",
      name: "Zain Razzaq",
      image: zainRazzaq,
      position: "General Secretary",
      bio: '"Ye 2 saal parh lo uske aage zindagi asaan ha"',
      link: "https://www.linkedin.com/in/zain-razzaq-96a084228/",
    },
  ];
</script>

<div class="flex flex-col gap-12 md:gap-20">
  <h2
    class="text-slate-700 self-center text-center text-4xl md:text-5xl font-black dark:text-gray-200"
  >
    Meet the Team
  </h2>
  <div class=" flex flex-col md:flex-row gap-8 md:px-32 xl:px-64 px-4">
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
            loading="lazy"
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
</div>
