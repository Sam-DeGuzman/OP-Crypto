<script>
  let disabled = false;

  async function requestConnection() {
    disabled = true;
    await ethereum.request({ method: "eth_requestAccounts" });
    disabled = false;
  }
</script>

<!-- Initiate a connection request in response to button click action-->
<article
  id="havemetamask"
  class="max-w-md mx-auto mt-5 p-5 rounded-lg shadow-lg"
>
  <img src="have_metamask.png" alt="" class="w-44 mx-auto" />
  <h1 class="text-lg">Metamask is Present!</h1>

  <p>Request A Connection</p>

  <button
    on:click={requestConnection}
    class="p-3 rounded-md mt-3 text-white bg-blue-500 disabled:opacity-50"
    {disabled}
    ><i class="fas fa-plug mr-2" /> Connect
  </button>
</article>
