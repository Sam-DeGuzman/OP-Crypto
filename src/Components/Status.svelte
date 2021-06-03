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
</script>

<aside id="status" class="w-full p-3 mx-auto bg-indigo-300">
  <div class="inline-block">
    <span class="font-bold text-md md:ml-10 lg:ml-10 uppercase">Network:</span>
    <span class="capitalize">{network}</span>
    <span
      class="font-bold text-md block  md:ml-10 md:inline lg:ml-10 lg:inline uppercase "
      >ETH Address:
    </span>
    <span>{address}</span>
  </div>
</aside>
