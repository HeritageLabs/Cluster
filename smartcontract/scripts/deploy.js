const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Cluster = await hre.ethers.getContractFactory("Cluster");
  const cluster = await Cluster.deploy();

  //const [account1, account2] = await ethers.getSigners();

  await cluster.deployed();
  console.log(
    `Cluster deployed to ${cluster.address}`
  );

  //Create dao
  /*const createDaotxn = await cluster.createDAO("Hexdee DAO", 60, 50, [account2.address]);
  await createDaotxn.wait();
  console.log("Hexdee DAO created!")

  const createDaotxn2 = await cluster.createDAO("Legacy DAO", 60, 50, []);
  await createDaotxn2.wait();
  console.log("Legacy DAO created!");

  //get daos
  const daos = await cluster.getDAOs();
  // console.log({ daos });
  // console.log("Hexdee DAO", { id: Number(daos[0].id), name: daos[0].name, address: daos[0].contract_address, creator: daos[0].creator, created_at: Number(daos[0].created_at) });
*/
  //get daos details
  /*const dao = await cluster.getDAODetails(0);
  console.log({
    totalMembers: Number(dao.totalMembers), voteTime: Number(dao.voteTime), quorum: Number(dao.quorum), balance: ethers.utils.formatEther(dao.balance), address: dao.contract_address
  });*/
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
