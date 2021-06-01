<script>
  import Tailwind from "./Components/Tailwind.svelte";

  export let status;

  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
    if (user.loggedIn) {
      status = "Logged In";
    } else {
      status = "Not Logged In";
    }
    // negates the user.loggedIn vice versa
  }
</script>

<main class="text-center">
  <div class="rounded-lg bg-red-200 mx-auto">
    <h1
      class="text-4xl text-transform: uppercase mx-auto h-20 w-1/2 inline-block"
      style="color: #ff3e00;"
    >
      User is {status} !
    </h1>
  </div>

  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  {#if user.loggedIn}
    <button on:click={toggle}> Log out </button>
  {:else}
    <button on:click={toggle}> Log in </button>
  {/if}
</main>
