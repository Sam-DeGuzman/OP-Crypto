<script>
  let contract_abi = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokens", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokens", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "tokenOwner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" },
      ],
      name: "safeSub",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "to", type: "address" },
        { name: "tokens", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" },
      ],
      name: "safeDiv",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokens", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
      name: "approveAndCall",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" },
      ],
      name: "safeMul",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "tokenOwner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" },
      ],
      name: "safeAdd",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "tokens", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "tokenOwner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "tokens", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
  ];
  let currentWallet = "";

  let contract_add = "0x496013D89b773C00fa431A3837F2d1d75EDE4aEC"; // OPW Token contract address

  let tokenOwnerWallet = "0xEfec799AC8A8F0457e44CC0B0ef249F53DCcB3cC"; //ETH address used for deploying contract

  // let contract = new web3.eth.Contract(contract_abi, contract_add); //Instantiate contract for OPW Token

  let contract_inst = new web3.eth.Contract(contract_abi, contract_add);

  web3.eth.getAccounts().then(function (account) {
    if (account.length == 0) {
      document.querySelector("#contract").style.display = "none";
    } else {
      currentWallet = account;
    }
  });

  function addToWallet() {
    let quantity = document.querySelector("#quantity").value;
    console.log(currentWallet);
    console.log(tokenOwnerWallet);
    console.log(quantity);
    console.log(contract_inst.methods);
    contract_inst.methods.approve(currentWallet, quantity);
    contract_inst.methods.transferFrom(
      tokenOwnerWallet,
      currentWallet,
      quantity
    );
  }

  // web3.eth.getBalance(samplewallet).then(console.log); //Test get sample wallet ETH balance

  // console.log(contract_inst.methods); //Get Contract methods
  // console.log(contract.methods.balanceOf(samplewallet).call()); //Test get sample wallet OPW token balance returns 'undefined' for non-existing token.
</script>

<article id="contract" class="max-w-md text-center rounded-md shadow-lg p-5">
  <img
    id="coin"
    src="coin.png"
    alt="OPW Token"
    class="mx-auto w-20 md:w-24 lg:w-38 mb-2"
  />
  <h1 class=" text-lg uppercase p-2">Add Over-Powered Token to Your Wallet</h1>

  <label for="quantity">Quantity</label>
  <input
    id="quantity"
    type="number"
    class="w-20 p-1"
    min="0"
    placeholder="0"
    value="0"
  />

  <button
    on:click={addToWallet}
    id="quantity"
    class="p-3 rounded-md mt-3 block mx-auto text-white bg-blue-500 disabled:opacity-50"
    ><i class="fas fa-plus mr-2" /> Add
  </button>
</article>
