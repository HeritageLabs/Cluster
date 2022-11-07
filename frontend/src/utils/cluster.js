import { AeSdkAepp, Node, BrowserWindowMessageConnection, walletDetector} from '@aeternity/aepp-sdk';
import clusterACI from './clusterACI.json';
import daoACI from "./daoACI.json";

export const clusterAddress = "ct_4GgKrRbehhu6MVS5v3zy1kRHDjidfWgaGwFE6A1VbGZ1Rx9Hk";

const COMPILER_URL = 'https://compiler.aepps.com';

const node = new Node('https://testnet.aeternity.io')

const aeSdk = new AeSdkAepp({
  nodes: [{ name: 'testnet', instance: node }],
  compilerUrl: COMPILER_URL,
  onNetworkChange: async ({networkId}) => console.log(networkId),
  onAddressChange: async ({current}) => console.log(current[0]),
  onDisconnect: () => console.log("Aepp is disconnected")
})

export async function getDA0s() {
  const contract = await aeSdk.getContractInstance({aci: clusterACI, contractAddress: clusterAddress})
  const res = await contract.methods.getDAOs();
  const daos = res.decodedResult;
  return daos;
}

export async function getDA0sFor () {
    const contract = await aeSdk.getContractInstance({aci: clusterACI, contractAddress: clusterAddress})
    const res = await contract.methods.getDA0sFor();
    const daos = res.decodedResult;
    return daos;
}


export async function createDAO(dao) { 
  const contract = await window.client.getContractInstance({aci: clusterACI, contractAddress: clusterAddress});
  const res = await contract.methods.createDAO(dao.name, dao.voteTime, dao.quorum, dao.members);
}

export async function getDA0 (id) {
    const contract = await aeSdk.getContractInstance({aci: clusterACI, contractAddress: clusterAddress})
    const res = await contract.methods.getDAO(id);
    const dao = res.decodedResult;
    return dao;
}

export async function getDA0Details(DAOAddress) {
  const contract = await aeSdk.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
  const res = await contract.methods.getDetails();
  const details = res.decodedResult;
  return details;
}

export async function donateTo(DAOAddress, amount) {
  const contract = await window.client.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
  console.log(contract);
  const res = await contract.methods.donate({amount: Number(amount)});
  return res.decodedResult
}

export async function createProposal(DAOAddress, proposal) { 
  const contract = await window.client.getContractInstance({aci: daoACI, contractAddress: DAOAddress});
  const res = await contract.methods.createProposal(proposal.title, proposal.description, proposal.proposalType, proposal.value, proposal.receipientAddress);
}

export async function voteProposal(DAOAddress, proposalId) { 
  const contract = await window.client.getContractInstance({aci: daoACI, contractAddress: DAOAddress});
  const res = await contract.methods.vote(proposalId);
}

export async function executeProposal(DAOAddress, proposalId) { 
  const contract = await window.client.getContractInstance({aci: daoACI, contractAddress: DAOAddress});
  const res = await contract.methods.executeProposal(proposalId);
}

export async function getProposal(DAOAddress, id) {
    const contract = await aeSdk.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
    const res = await contract.methods.getProposal(id);
    const proposal = res.decodedResult;
    return proposal;
}

export async function getProposals(DAOAddress) {
    const contract = await aeSdk.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
    const res = await contract.methods.getProposals();
    const proposals = res.decodedResult;
    return proposals;
}

export async function getOngoingProposals(DAOAddress) {
    const contract = await aeSdk.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
    const res = await contract.methods.getOngoingProposals();
    const proposals = res.decodedResult;
    return proposals;
}

export async function getProposalsToExecute(DAOAddress) {
    const contract = await aeSdk.getContractInstance({aci: daoACI, contractAddress: DAOAddress})
    const res = await contract.methods.getProposalsToExecute();
    const proposals = res.decodedResult;
    return proposals;
}



export const scanForWallets = async() => {
    return new Promise((resolve) => {
        const handleWallets = async ({ wallets, newWallet }) => {
          try {
            newWallet = newWallet || Object.values(wallets)[0]
            stopScan()
            await aeSdk.connectToWallet(newWallet.getConnection())
            const { address: { current } } = await aeSdk.subscribeAddress('subscribe', 'connected')
            // console.log(Object.keys(current)[0]);
            resolve()
          } catch (err) {
            console.log(err);
          }
        }
        const scannerConnection = new BrowserWindowMessageConnection()
        const stopScan = walletDetector(scannerConnection, handleWallets)
    })
};

export const login = async() => {
  try {
    await scanForWallets();
  } catch (err) {
    console.log(err)
  }
  return aeSdk;
}


export async function logout () {
  await aeSdk.disconnectWallet();
  window.location.reload();
}