<script lang="ts">
    import beams from "../assets/img/0-beams.webp";
    import Countdown from "./countdown.svelte";
    import RegisterNowCta from "./register-now-cta.svelte";
    import { areApplicationsOpen } from "$lib/utils";
    import { registrationDeadline } from "$lib/data";
</script>

<div
    class=" w-screen min-h-[90vh] overflow-x-hidden grid grid-cols-[24] grid-rows-[13] bg-grid"
>
    <!-- background -->
    <div class=" absolute w-screen min-h-[90vh] overflow-hidden">
        <img
            alt="hero background"
            src={beams}
            class="opacity-20 w-screen min-h-[90vh] scale-x-[2] md:scale-x-150 rotate-90 md:rotate-0"
        />
    </div>
    <div
        class=" absolute w-screen bottom-0 left-0 -translate-x-1/2 translate-y-1/3"
    />

    <!-- main content -->
    <main
        class=" absolute pt-10 px-4 md:px-0 w-screen min-h-[90vh] flex flex-col justify-center gap-32 pb-20"
    >
        <div
            class=" flex flex-col w-full md:w-2/3 self-center h-full justify-end md:justify-end items-center"
        >
            <h1
                class="text-6xl relative md:text-7xl font-bold text-center text-zinc-700 dark:text-gray-300 tracking-tight"
            >
                <span class="text-blue-700">G</span>oogle
                <span class="text-red-600">D</span>eveloper
                <span class="text-yellow-500">G</span>roup
                <br /> on
                <span class="text-green-700">C</span>ampus ITU
            </h1>

            <p
                class="max-w-3xl dark:text-[#bababa] my-12 text-sm md:text-base text-slate-500 text-center tracking-wide"
            >
                Unleash innovation with the exceptional Google Developer Group
                on Campus at
                <span
                    class=" font-mono font-bold text-green-500 dark:text-green-400"
                    ><a href="https://itu.edu.pk/"
                        >Information Technology University</a
                    ></span
                >. Join our expert core team on a journey of tech exploration
                and empowerment.
            </p>

            {#if areApplicationsOpen()}
                <RegisterNowCta
                    onClick={() => {
                        document
                            .getElementById("application-form")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            {/if}

            <div
                class="flex mt-12 gap-2 md:gap-4 flex-col-reverse md:flex-col items-center"
            >
                <Countdown />
                {#if areApplicationsOpen()}
                    <p
                        class="text-sm md:text-base text-gray-500 dark:text-gray-400"
                    >
                        The Deadline is near <span class="font-bold ml-2"
                            >{registrationDeadline
                                .toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })
                                .replace(" ", "th ")}</span
                        >
                    </p>
                {/if}
            </div>
        </div>
    </main>
</div>
