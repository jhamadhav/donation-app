// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract DonationContract {
    struct Donation {
        string id;
        address userAddress;
        string time;
        uint256 amount;
    }

    mapping(string => Donation) public donations;
    string[] allDonations;

    function create(
        string memory id,
        string memory time,
        uint256 amount
    ) public {
        Donation memory a;
        a.id = id;
        a.time = time;
        a.amount = amount;
        a.userAddress = msg.sender;

        donations[id] = a;

        allDonations.push(id);
    }


    // function to view appication
    function getDonation(string memory id) public view returns (Donation memory) {
        return donations[id];
    }

    function getAllDonationID() public view returns(string[] memory){
        return allDonations;
    }
}