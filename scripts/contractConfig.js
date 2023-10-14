// contract creation block address details

// first block address
const contractAddress = "0x1e0900C5DdD35Ac01F088b1F090D87A0AaC66F66";

// first block abi
const abi = [
   {
      inputs: [
         {
            internalType: "string",
            name: "",
            type: "string",
         },
      ],
      name: "donations",
      outputs: [
         {
            internalType: "string",
            name: "id",
            type: "string",
         },
         {
            internalType: "address",
            name: "userAddress",
            type: "address",
         },
         {
            internalType: "string",
            name: "time",
            type: "string",
         },
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
         },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
   },
   {
      inputs: [
         {
            internalType: "string",
            name: "id",
            type: "string",
         },
         {
            internalType: "string",
            name: "time",
            type: "string",
         },
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
         },
      ],
      name: "create",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      inputs: [
         {
            internalType: "string",
            name: "id",
            type: "string",
         },
      ],
      name: "getDonation",
      outputs: [
         {
            components: [
               {
                  internalType: "string",
                  name: "id",
                  type: "string",
               },
               {
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
               },
               {
                  internalType: "string",
                  name: "time",
                  type: "string",
               },
               {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
               },
            ],
            internalType: "struct DonationContract.Donation",
            name: "",
            type: "tuple",
         },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
   },
   {
      inputs: [],
      name: "getAllDonations",
      outputs: [
         {
            internalType: "string[]",
            name: "",
            type: "string[]",
         },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
   },
];
