<script lang="ts">

    import CodeRush24PrizeDistribution_1 from "../assets/img/IMG-20240815-WA0002.webp"
    import CodeRush24PrizeDistribution_2 from "../assets/img/IMG-20240815-WA0004.webp"
    import CodeRush24PrizeDistribution_3 from "../assets/img/IMG-20240815-WA0006.webp"
    import CodeRush24PrizeDistribution_4 from "../assets/img/IMG-20240815-WA0008.webp"
    import CodeRush24PrizeDistribution_5 from "../assets/img/IMG-20240815-WA0010.webp"
    import CodeRush24PrizeDistribution_6 from "../assets/img/IMG-20240815-WA0012.webp"
    import CodeRush24PrizeDistribution_7 from "../assets/img/IMG-20240815-WA0013.webp"
    import CodeRush24PrizeDistribution_8 from "../assets/img/IMG-20240815-WA0015.webp"

    import CodeRush24_1 from "../assets/img/IMG_7422.webp";
    import CodeRush24_2 from "../assets/img/IMG_7428.webp";
    import CodeRush24_3 from "../assets/img/IMG_7437.webp";
    import CodeRush24_4 from "../assets/img/IMG_7430.webp";
    import CodeRush24_5 from "../assets/img/RRC09498.webp";
    import CodeRush24_6 from "../assets/img/IMG_7453.webp";
    import CodeRush24_7 from "../assets/img/IMG_7445.webp";
    import CodeRush24_8 from "../assets/img/IMG_7456.webp";
    import CodeRush24_9 from "../assets/img/IMG_7491.webp";
    import CodeRush24_10 from "../assets/img/IMG_7493.webp";

    import GdscCore24_1 from "../assets/img/IMG_0442.webp";
    import GdscCore24_2 from "../assets/img/RRC09955.webp";

    import ArbisoftMockInterview_1 from "../assets/img/IMG_9638.webp";
    import ArbisoftMockInterview_2 from "../assets/img/IMG_9640.webp";
    import ArbisoftMockInterview_3 from "../assets/img/IMG_9643.webp";
    import ArbisoftMockInterview_4 from "../assets/img/IMG_9645.webp";

    import GithubSession_1 from "../assets/img/IMG_2865.webp";
    import GithubSession_2 from "../assets/img/IMG_2868.webp";
    import GithubSession_3 from "../assets/img/IMG_2866.webp";
    import GithubSession_4 from "../assets/img/IMG_2867.webp";

    import CodeRush22_1 from "../assets/img/IMG_2870.webp";
    import CodeRush22_2 from "../assets/img/IMG_2869.webp";
    import CodeRush22_3 from "../assets/img/IMG_2873.webp";
    import CodeRush22_4 from "../assets/img/IMG_2871.webp";

    import ImagesPreviewer from "./images-previewer.svelte";

    export let classname: string = "";

    const codeRush24 = {
        title: "CodeRush'24",
        description:
            "The biggest technical event at ITU, CodeRush'24, took place in March. Over 300 students from 12 different universities across Pakistan competed. Prize money, certificates, shields, and goodies were distributed among the students. Thanks to our amazing team for organizing such a great event!",
        images: [
            CodeRush24_1,
            CodeRush24_2,
            CodeRush24_3,
            CodeRush24_4,
            CodeRush24_5,
            CodeRush24_6,
            CodeRush24_7,
            CodeRush24_8,
            CodeRush24_9,
            CodeRush24_10,
        ],
    };
    const codeRush22 = {
        title: "CodeRush'22",
        description: "In 2022, GDSC introduced the first-ever coding competition at ITU, where students from all departments competed for the throne. Batch CS21 amazed us with a brilliant performance.",
        images: [CodeRush22_1, CodeRush22_2, CodeRush22_3, CodeRush22_4],
    };
    const githubSession = {
        title: "Github Session",
        description: "GDSC conducted a session on Git and GitHub specifically for Batch 23, helping them understand the purpose and usage of Git and GitHub. The session was delivered by the Tech Lead of GDSC, Ehab Sohail.",
        images: [
            GithubSession_1,
            GithubSession_2,
            GithubSession_3,
            GithubSession_4,
        ],
    };
    const arbisoftMockInterview = {
        title: "Mock Interviews",
        description: "In collaboration with Arbisoft, the leading tech company in Pakistan, GDSC conducted mock interviews to help students understand the interview process and prepare them for current market needs",
        images: [
            ArbisoftMockInterview_1,
            ArbisoftMockInterview_2,
            ArbisoftMockInterview_3,
            ArbisoftMockInterview_4,
        ],
    };
    const gdscCore24 = {
        title: "Core Team'24",
        description: "The amazing core team of GDSC ❤️",
        images: [GdscCore24_1, GdscCore24_2],
    };
    const codeRush24PriceDistribution = {
        title: "Prize Distribution Ceremony’24",
        description: "At the end of the tenure, the whole team had a farewell dinner arranged by GDSC. Certificates and shields were distributed among the team members.",
        images: [
            CodeRush24PrizeDistribution_1,
            CodeRush24PrizeDistribution_2,
            CodeRush24PrizeDistribution_3,
            CodeRush24PrizeDistribution_4,
            CodeRush24PrizeDistribution_5,
            CodeRush24PrizeDistribution_6,
            CodeRush24PrizeDistribution_7,
            CodeRush24PrizeDistribution_8,
        ],
    };
</script>

<div class={`w-full h-max flex flex-col gap-32 md:gap-8 xl:gap-12 ${classname}`}>
    <ImagesPreviewer
        reverse
        images={codeRush24.images}
        title={codeRush24.title}
        description={codeRush24.description}
    />
    <ImagesPreviewer
        images={codeRush22.images}
        title={codeRush22.title}
        description={codeRush22.description}
    />
    <ImagesPreviewer
        images={arbisoftMockInterview.images}
        title={arbisoftMockInterview.title}
        description={arbisoftMockInterview.description}
    />
    <ImagesPreviewer
        reverse
        images={githubSession.images}
        title={githubSession.title}
        description={githubSession.description}
    />
    <ImagesPreviewer
        images={codeRush24PriceDistribution.images}
        title={codeRush24PriceDistribution.title}
        description={codeRush24PriceDistribution.description}
    />
    <ImagesPreviewer
        reverse
        images={gdscCore24.images}
        title={gdscCore24.title}
        description={gdscCore24.description}
    />
</div>

<!-- <div -->
<!--     class={`flex gap-4 md:gap-8 xl:gap-12 w-full h-full px-4 md:px-12 xl:px-20 ${classname}`} -->
<!-- > -->
<!--     <div class="flex bg-black/20 w-1/2 aspect-square"> -->
<!--         <img -->
<!--             loading="lazy" -->
<!--             draggable="false" -->
<!--             class="rounded-sm shadow-black/50 shadow-2xl pointer-events-none top-0 z-10 right-0 h-full w-full object-cover" -->
<!--             src={selectedImage} -->
<!--             alt="coderush" -->
<!--             style="filter: contrast(125%) saturate(150%)" -->
<!--             transition:fade -->
<!--         /> -->
<!--     </div> -->
<!--     <div class="flex flex-col gap-12 w-1/2 justify-center aspect-square"> -->
<!--         <div class="text-start flex flex-col"> -->
<!--             <h2 -->
<!--                 class="text-5xl mb-4 md:mb-8 font-bold text-gray-700 dark:text-gray-300" -->
<!--             > -->
<!--                 {title} -->
<!--             </h2> -->
<!--             <p class="text-gray-700 dark:text-gray-300 text-sm"> -->
<!--                 {description} -->
<!--             </p> -->
<!--         </div> -->
<!--         <div class="flex flex-wrap items-center gap-2 w-full"> -->
<!--             {#each otherImages as img (img)} -->
<!--                 <SelectableImage -->
<!--                     classname="w-[80px] md:w-[144px] h-32" -->
<!--                     image={img} -->
<!--                     isSelected={img == selectedImage} -->
<!--                     onSelect={() => (selectedImage = img)} -->
<!--                 /> -->
<!--             {/each} -->
<!--         </div> -->
<!--     </div> -->
<!-- </div> -->
