<script>
  web3 = new Web3(Web3.givenProvider || "ws://some.local-or-remote.node:8546");

  let network = "";
  let address = "";

  web3.eth.net.getNetworkType().then(function (type) {
    network = type;
  });

  web3.eth.getAccounts().then(function (account) {
    if (account.length != 0) {
      address = account;
    } else {
      address = "No account connected...";
    }
  });

  function copyETH() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector("#eth_address");
    cb.writeText(paragraph.innerText).then(() => alert("Address copied"));
  }
</script>

<aside id="status" class="w-full p-3 mx-auto bg-indigo-300">
  <div class="inline-block">
    <span class="font-bold text-md md:ml-10 lg:ml-10 uppercase">Network:</span>
    <span class="capitalize">{network}</span>
    <span
      class="font-bold text-md block mt-2  md:ml-10 md:inline lg:ml-10 lg:inline uppercase "
      >ETH Address:
    </span>

    {#if address != "No account connected..."}
      <span id="eth_address"
        >{address}
        <button on:click={copyETH} class="w-7 ml-2 bg-gray-200 rounded-md">
          <i class="far fa-copy" />
        </button></span
      >
    {:else}
      <span>{address}</span>
    {/if}
  </div>
</aside>
