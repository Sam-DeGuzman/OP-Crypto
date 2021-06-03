<script>
  web3.eth.getAccounts().then(function (account) {
    if (account.length == 0) {
      document.querySelector("#contract").style.display = "none";
    }
  });
</script>

<article id="contract" class="max-w-md rounded-md shadow-lg p-5">
  <h1 class="font-bold text-lg uppercase">Contract</h1>
</article>
