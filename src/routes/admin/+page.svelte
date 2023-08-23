<script lang="ts">
  import ToastSuccess from "../components/toast-success.svelte";
  import ToastError from "../components/toast-error.svelte";
  import MdContentCopy from "svelte-icons/md/MdContentCopy.svelte";

  export let data;

  let success = false;
  let successText: string;
  let error = false;
  let errorText: string;

  function showSuccess(text = "Success!", duration = 2000) {
    success = true;
    successText = text;
    setTimeout(() => (success = false), 2000);
  }
  function showError(text = "Oops! An Error Occurred.") {
    error = true;
    errorText = text;
    setTimeout(() => (error = false), 2000);
  }

  async function approveApplication(id: string) {
    const { status } = await fetch(`?id=${id}&status=approved`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (status === 200) {
      const index = data.applications.findIndex((a) => a._id === id);
      data.applications[index] = {
        ...data.applications[index],
        status: "approved",
      };
      showSuccess("Application accepted!");
    } else {
      showError();
    }
  }
  async function rejectApplication(id: string) {
    const { status } = await fetch(`?id=${id}&status=rejected`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (status === 200) {
      const index = data.applications.findIndex((a) => a._id === id);
      data.applications[index] = {
        ...data.applications[index],
        status: "rejected",
      };
      showSuccess("Application rejected!");
    } else {
      showError();
    }
  }

  function getStatusTextColor(status: "pending" | "approved" | "rejected") {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "approved":
        return "text-sky-500";
      case "rejected":
        return "text-orange-500";
    }
  }

  function copyEmailsToClipboard() {
    const emails = data.applications.map((a) => a.email).join(" ");
    navigator.clipboard.writeText(emails);

    showSuccess("Emails copied to clipboard!", 4000);
  }
</script>

{#if success}
  <ToastSuccess text={successText} />
{/if}
{#if error}
  <ToastError text={errorText} />
{/if}

<div
  class=" px-4 md:px-20 xl:px-40 bg-slate-100 min-h-screen py-20 flex flex-col gap-4 items-center"
>
  <h2 class=" text-5xl mb-16 font-bold text-gray-700">
    Number of applicants: {data.applications.length}
  </h2>

  <button
    on:click={() => copyEmailsToClipboard()}
    class=" self-end p-2 hover:bg-black/[0.05] dark:hover:bg-white/10 flex gap-2 rounded-md transition-all cursor-pointer"
  >
    <div class="w-5 text-gray-500">
      <MdContentCopy />
    </div>
    <p class=" text-gray-700 text-sm">copy emails (space separated)</p>
  </button>

  <div
    class="relative w-full overflow-x-auto shadow-2xl shadow-black/10 sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3" />
          <th scope="col" class="px-6 py-3"> Full name </th>
          <th scope="col" class="px-6 py-3"> Email </th>
          <th scope="col" class="px-6 py-3"> Roll number </th>
          <th scope="col" class="px-6 py-3"> Team </th>
          <th scope="col" class="px-6 py-3"> Contact </th>
          <th scope="col" class="px-6 py-3"> Department </th>
          <th scope="col" class="px-6 py-3"> Status </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each data.applications as a, index (a._id)}
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">{index + 1}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {a.fullName}
            </th>
            <td class="px-6 py-4">{a.email}</td>
            <td class="px-6 py-4">{a.studentId}</td>
            <td class="px-6 py-4">{a.team}</td>
            <td class="px-6 py-4">{a.contact}</td>
            <td class="px-6 py-4">{a.department}</td>
            <td
              class={`px-6 py-4 capitalize ${getStatusTextColor(
                a.status || "pending"
              )}`}>{a.status || "pending"}</td
            >
            <td class="px-6 py-4 text-right">
              <button
                on:click={() => approveApplication(a._id || "")}
                class="font-medium text-xs text-green-600 dark:text-green-500 hover:underline"
                >Approve</button
              >
              &nbsp;
              <button
                on:click={() => rejectApplication(a._id || "")}
                class="font-medium text-xs text-red-600 dark:text-red-500 hover:underline"
                >Reject</button
              >
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
