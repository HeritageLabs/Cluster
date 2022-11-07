const { AeSdk, Node, MemoryAccount, Compiler } = require('@aeternity/aepp-sdk');
const fs = require("fs");
//const aci = require("./daoACI.json");
const CONTRACT_SOURCE = fs.readFileSync("./daotemplate.aes", encoding="utf-8")

const ACCOUNT_KEYPAIR = {
  publicKey: 'ak_e9UjhUM8ePgZUPkFgxFJ1tqv6bTwfeqhxcnTBcrYDyW5QhgqU',
  secretKey: 'eba8786a506fd20e8b00f117e6d6598fd0943ff3d0bd926aea5e1c35802ce36a54584dc898d97866e538fb8a6bfa26db4ea60d69c87c68949b4531078aab2ea2',
};
const NODE_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

(async () => {
  const account = new MemoryAccount({ keypair: ACCOUNT_KEYPAIR });
  const node = new Node(NODE_URL);
  const aeSdk = new AeSdk({
    nodes: [{ name: 'testnet', instance: node }],
    compilerUrl: COMPILER_URL,
  });
  await aeSdk.addAccount(account, { select: true });
  const contract = await aeSdk.getContractInstance({ source: CONTRACT_SOURCE });
  const aci = await contract._aci
  fs.writeFileSync('./daoACI.json', JSON.stringify(aci));
  const contract2 = await aeSdk.getContractInstance({ aci, contractAddress: "ct_L2xz9o3kBGh3xUkCYunKkWTtB6mgZGePAJ5SJAaGf9y42e4xJ" });
	const tx = await contract2.methods.getDetails();
	console.log(tx.decodedResult);

	await contract2.methods.donate({amount: 1e18})

	const tx2 = await contract2.methods.createProposal("title", "description", "transfer", "1", "ak_rAjdJNuUHwCH8EBi1ER6Lu9WdHeRNuFQpPd1XLLEarjA41T4j");
	const tx3 = await contract2.methods.getProposal(0);
	console.log(tx3.decodedResult);
	const tx4 = await contract2.methods.vote(0);
	const tx5 = await contract2.methods.getProposal(0);
	console.log(tx5.decodedResult);

	await contract2.methods.executeProposal(0);
	const tx6 = await contract2.methods.getProposal(0);
	console.log(tx6.decodedResult);

})();
