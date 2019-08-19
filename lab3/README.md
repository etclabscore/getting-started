### Let's try using Truffle and Remix to compile for ETC
For this lab we will be using standard ethereum tools to build 
smart contracts for ETC.

#### Requirements
- solidity 5.x
- truffle
- slither
- python3
- metamask 

#### Installation
Install solidity
  ```
   brew install solidity
  ```
Install truffle
```
npm install -g truffle
```
Install solhint  
```
npm install -g solhint
```
Install metamask
```
https://metamask.io/
```

#### Smart Contracts with Remix
So we're going to write a smart contract
```
cd lab3
```
We'll be building FunLock a simple smart contract that creates a global expiring lock

```solidity

pragma solidity 0.5.11;
/**
 * A contract that sets a holder address then waits n blocks to release it
 * The owner is the deployer and the initial lock holder
 */
contract FunLock {
  address public holder;
  address public owner;
  uint public limit;
  uint public expiration;

  modifier onlyOwner () {
   require(msg.sender == owner, "Not owner");
   _;
  }

  modifier isExpired() {
    require(block.number > expiration, "Lock not expired");
    _;
  }

  constructor() public {
    owner = msg.sender;
    holder = msg.sender;
    limit = 10;
    expiration = 0;
  }

  function setNewLimit(uint l) public onlyOwner {
    limit = l;
  }

  function lock() public isExpired {
    holder = msg.sender;
    expiration = expiration + limit;
  }

  function hasLock(address addr) public view returns (bool) {
    return (addr == holder);
  }
}
```
We'll copy-pasta this into remix

[Remix-IDE](https://remix.ethereum.org/)

1. Create a new file called FunLock
2. Copy pasta the contract above
3. Configure for ETC
4. Set EVM settings to Byzantium
5. Without it you'll likely see opcode 0x1c error with your smart contract on Kotti
6. Set Compiler version to 5.11
7. Let's build it and deploy it on the local VM
Now let's try this on Kotti
First let's get some Kotti ETC
```
 See Whiteboard for details 
```
In order to do this lets compile the contract with 
an inject provider, then deploy

```
We open metamask and set its settings to be localhost:8545
```

```
We also import our private keys into metamask
```

Now we deploy the smart contract

Let's see it:
https://kottiexplorer.ethernode.io/

We can also compile and deploy with truffle
### Smart Contracts with Truffle

```
npm install -g truffle
```
Install solidity
```
brew install solidity
```
Create a truffle directory
```
truffle init kotti-unlimited
```
Lets configure the network
copy-pasta  into your truffle_config.js
```js
module.exports = {
  networks: {
    kotti: {
      port: 8545,
      network_id: 6,
      host: "127.0.0.1",
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.11”, // Fetch exact version from solc-bin (default: truffle's version)
      evmVersion: "byzantium"
    }
  }
}
```
Copy-pasta our old contract FunLock.sol into
```
 contracts/
```

Compile the contract
```
truffle compile
```
Try and attach and connect to kotti
Start kotti with
```
geth --kotti --rpc --rpcport 8545 --rpccorsdomain "127.0.0.1"
```
Load truffle against the kotti network
```
truffle console --kotti
```
Try finding your smart contract you deployed earlier
```
FunLock.at("0x83696d121a1696cac3d33c154b5b7c8e06dad861")
```

Let's try slither for static analysis
```
python3 -m venv venv
source venv/bin/activate
pip install slither-analyzer
```
Launch slither against our smart contract
```
slither --solc-args "--evm-version byzantium" contracts/FunLock.sol
```
**Tip**
Setting the evm version is important across tools so you are using a ETC compat. evm, when buidling.
