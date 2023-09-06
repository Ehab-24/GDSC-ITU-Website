<script lang="ts">
  import Input from "./input.svelte";

  import email from "../../assets/icons/email.svg";
  import user from "../../assets/icons/user.svg";
  import FaPhone from "svelte-icons/fa/FaPhone.svelte";
  import Radio from "./radio.svelte";
  import Textarea from "./textarea.svelte";
  import CTA from "./cta.svelte";
  import { enhance } from "$app/forms";

  export let className: string = "";

  let loading = false;
</script>

<div
  id="application-form"
  class={" w-full flex pt-12 flex-col items-center gap-20 md:px-32 xl:px-64 px-4 " +
    className}
>
  <h2
    class=" w-full md:w-2/3 xl:w-2/5 text-5xl font-bold text-center text-zinc-700 dark:text-white tracking-tight"
  >
    Join us to become better
  </h2>

  <form
    class=" w-full flex flex-col items-center gap-12"
    method="POST"
    use:enhance={() => {
      loading = true;
      console.log(loading);

      return async ({ update }) => {
        await update();
        loading = false;
        console.log(loading);
      };
    }}
  >
    <div class=" w-full grid grid-cols-1 gap-8 md:grid-cols-2">
      <Input
        required
        name="full-name"
        id="full-name"
        label="Full Name"
        placeholder="Elon Musk"
      >
        <img
          loading="lazy"
          src={user}
          alt="user icon"
          class=" w-5"
          slot="icon"
        />
      </Input>
      <Input
        required
        name="email"
        id="email"
        type="email"
        label="Your Email"
        placeholder="rollno@itu.edu.pk"
      >
        <img
          loading="lazy"
          src={email}
          alt="email icon"
          class=" w-5"
          slot="icon"
        />
      </Input>
      <Input
        required
        name="roll-number"
        id="roll-number"
        label="Roll Number"
        placeholder="bscs23012"
      >
        <img
          loading="lazy"
          src={email}
          alt="email icon"
          class=" w-5"
          slot="icon"
        />
      </Input>
      <Input
        required
        name="contact-number"
        id="contact-number"
        label="Contact Number"
        type="number"
        placeholder="03245772901"
      >
        <div slot="icon" class="w-5 aspect-square text-gray-400">
          <FaPhone />
        </div>
      </Input>
    </div>

    <div class=" flex flex-col gap-4 items-center w-full">
      <h2 class=" text-xl font-bold text-gray-500 dark:text-gray-300">
        Department
      </h2>
      <div class="flex flex-wrap gap-8 justify-center w-full">
        <Radio name="department" value="computer-science" id="computer-science"
          >Computer Science</Radio
        >
        <Radio
          name="department"
          value="electrical-engineering"
          id="electrical-engineering">Electrical Engineering</Radio
        >
        <Radio
          name="department"
          value="computer-engineering"
          id="computer-engineering">Computer Engineering</Radio
        >
        <Radio
          name="department"
          value="software-engineering"
          id="software-engineering">Software Engineering</Radio
        >
        <Radio
          name="department"
          value="management-and-technology"
          id="management-and-technology">Management And Technology</Radio
        >
        <Radio
          name="department"
          value="economics-and-data-science"
          id="economics-and-data-science">Economics And Data Science</Radio
        >
        <Radio
          name="department"
          value="artificial-intelligence"
          id="artificial-intelligence">Artificial Intelligence</Radio
        >
      </div>
    </div>

    <div class=" flex flex-col gap-4 items-center w-full">
      <h2 class=" text-xl font-bold text-gray-500 dark:text-gray-300">Team</h2>
      <fieldset class="flex flex-wrap gap-8 justify-center w-full">
        <Radio name="team" value="marketing" id="marketing">Marketing</Radio>
        <Radio name="team" value="event" id="event">Event Management</Radio>
        <Radio name="team" value="design" id="design">Design</Radio>
      </fieldset>
    </div>

    <Textarea
      name="reason"
      id="reason"
      placeholder="Why do you wish to join GDSC?"
      required
    />
    <Textarea
      name="experience"
      id="experience"
      placeholder="Prior experience (if any)"
    />

    <CTA
      disabled={true}
      type="submit"
      className=" px-6 whitespace-nowrap h-10 self-end">Applications Closed</CTA
    >
  </form>
</div>
