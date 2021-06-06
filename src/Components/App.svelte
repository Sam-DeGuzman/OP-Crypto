<script>
  import Tailwind from "./Tailwind.svelte";
  import Status from "./Status.svelte";
  import AddToWallet from "./AddToWallet.svelte";
  import ConnectionRequest from "./ConnectionRequest.svelte";
  import NoMetamask from "./NoMetamask.svelte";

  export let appName;

  let hasMetamask = false;

  if (typeof window.ethereum !== "undefined" && ethereum.isMetaMask) {
    hasMetamask = true;
  } else {
    hasMetamask = false;
  }
</script>

<header
  id="banner"
  class=" py-5 mx-auto text-center"
  style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
>
  <img
    id="overpowered"
    src="https://cdn0.iconfinder.com/data/icons/esports-wildberry-vol-1/256/Critical_Damage-512.png"
    alt=""
    class="mx-auto w-24 md:w-28 lg:w-40 mb-5"
  />
  <h1
    class="text-3xl md:text-4xl lg:text-5xl text-gray-200 text-transform: uppercase font-bold mx-auto mb-10 my-auto w-1/2 inline-block"
  >
    Welcome to {appName}!
  </h1>
  <br />
  <p class="text-white">
    Powered by: <a
      href="https://metamask.io/"
      class="text-red-100 underline"
      style="color:white;"
      target="_blank">Metamask.io</a
    >
  </p>
</header>

<main>
  <!-- Check if Metamask Chrome extension is installed. -->
  {#if hasMetamask}
    <Status />
    <div class="flex justify-center">
      <ConnectionRequest />
      <AddToWallet />
    </div>
  {:else}
    <NoMetamask />
  {/if}
</main>
