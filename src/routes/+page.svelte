<script lang="ts">
    import ApplicationForm from "../components/application-form.svelte";
    import Hero from "../components/hero.svelte";
    import Members from "../components/members.svelte";
    import Events from "../components/events.svelte";

    import qr_code from "../assets/img/qr_code.jpg";
    import beams from "../assets/img/1-beams.webp";
    import ToastSuccess from "../components/toast-success.svelte";
    import ToastError from "../components/toast-error.svelte";
    import CoderushPopup from "../components/coderush-popup.svelte";
    import { onMount } from "svelte";
    import { registrationDeadline } from "$lib/data";

    export let form;
    let success: boolean = false;
    let error: boolean = false;
    let successText: string = "";
    let errorText: string = "";
    let showPopup: boolean = false;

    onMount(() => {
        setTimeout(() => {
            if (registrationDeadline > new Date()) {
                showPopup = true;
            }
        }, 500);
    });

    function showSuccess(text = "Application Recieved!") {
        success = true;
        successText = text;
        setTimeout(() => {
            success = false;
        }, 3000);
    }
    function showError(text = "Oops! An Error Occurred.") {
        error = true;
        errorText = text;
        setTimeout(() => {
            error = false;
        }, 3000);
    }

    $: {
        if (form?.success) {
            showSuccess();
        } else if (form?.success === false) {
            form.message ? showError(form.message) : showError();
        }
    }
</script>

<svelte:head>
    <title>GDSC ITU</title>
    <meta
        name="description"
        content="Google Developer Student Club society of Information Technology University of Punjab, Pakistan"
    />
</svelte:head>

{#if success}
    <ToastSuccess text={successText} />
{/if}
{#if error}
    <ToastError text={errorText} />
{/if}

<div class=" w-screen flex flex-col overflow-x-hidden">
    <Hero />
    <!-- <Members /> -->
    <Events classname="py-12 md:py-20" />
    <div class=" h-max relative overflow-hidden">
        <div
            class=" w-full pointer-events-none dark:opacity-50 h-full absolute grid grid-cols-[24] grid-rows-[13] bg-grid"
        />
        <img
            loading="lazy"
            draggable="false"
            class=" absolute pointer-events-none top-0 z-10 right-0 h-full w-full md:w-1/2 rotate-45 hue-rotate-180"
            src={beams}
            alt="beams"
        />
        <ApplicationForm className="z-50" disabled={false} />
        <div class=" h-12" />
    </div>
    <div class=" w-full px-4 md:px-0 pb-20 grid place-items-center">
        <img
            loading="lazy"
            class=" w-full max-w-[240px] shadow-2xl shadow-black/20 dark:shadow-green-200/10"
            alt="gdsc website qr code"
            src={qr_code}
        />
    </div>
</div>

<CoderushPopup bind:showPopup />
