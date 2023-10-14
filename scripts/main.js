let contractProxy = null;
let donations = [];
let myAddress = null;

window.onload = async () => {
   contractProxy = new ContractProxy();
   await contractProxy.connect();

   hideLoader();
   if (contractProxy == null) {
      return;
   }

   myAddress = await contractProxy.getAccount();
   myAddress = myAddress["address"];

   // create donation
   document.getElementById("make-donation").onclick = async () => {
      showLoader();
      let val = document.getElementById("input").value;
      await contractProxy.createDonation(val);

      getDonations();

      hideLoader();
   };

   // your
   document.getElementById("your-donation").onclick = () => {
      getDonations();
   };

   getDonations();
};

const getDonations = async () => {
   if (contractProxy == null) return;

   showLoader();
   let res = await contractProxy.getAllDonationsID();
   //    console.log(`all donations fetched`);
   //    console.log(res);

   hideLoader();

   donations = [];
   for (let i = 0; i < res.length; ++i) {
      let temp = await contractProxy.getDonationByID(res[i]);
      //   console.log(temp);

      let data = {};
      data["id"] = temp[0];
      data["address"] = temp[1];
      data["time"] = temp[2];
      data["amount"] = temp[3];

      donations.push(data);
   }
   buildCards(donations);
   yourDonations();
};

const yourDonations = () => {
   let data = [];
   for (let i = 0; i < donations.length; ++i) {
      if ((donations[i].address = myAddress)) {
         data.push(donations[i]);
      }
   }
   buildCards(data, "your");
};

const buildCards = (data, id = "all") => {
   let appContainer = document.getElementById(id);
   let txt = "<h1>All Donations:</h1>";
   if (id == "your") {
      txt = "<h1>Your Donations:</h1>";
   }
   for (let i = 0; i < data.length; ++i) {
      txt += `
        <div class="transaction-card">
        <div class="data">
            Address:<br>
            <p class="address">
            ${data[i]["address"]}
            <p class="time">
            ${data[i]["time"]}
            </p>
        </div>
        <div class="amount">
        $ ${data[i]["amount"]}
        </div>
    </div>`;
   }
   appContainer.innerHTML = txt;
};

const showLoader = () => {
   document.getElementById("loader-container").style.display = "flex";
};

const hideLoader = () => {
   document.getElementById("loader-container").style.display = "none";
};
