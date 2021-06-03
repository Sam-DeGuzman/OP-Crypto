<script>
  let disabled = false;

  web3.eth.getAccounts().then(function (res) {
    if (res.length != 0) {
      document.querySelector("#havemetamask").style.display = "none";
    }
  });

  async function requestConnection() {
    disabled = true;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    document.querySelector("#havemetamask").style.display = "none";
    location.reload();
  }
</script>

<!-- Initiate a connection request in response to button click action-->
<article
  id="havemetamask"
  class="max-w-md mr-5 p-5 rounded-lg shadow-lg text-center"
>
  <img src="have_metamask.png" alt="" class="w-44 mx-auto" />
  <h1 class="text-lg">Metamask is Present!</h1>

  <p>Login to Request A Connection</p>

  <button
    on:click={requestConnection}
    class="p-3 rounded-md mt-3 text-white bg-blue-500 disabled:opacity-50"
    {disabled}
    ><i class="fas fa-plug mr-2" /> Connect
  </button>
</article>
