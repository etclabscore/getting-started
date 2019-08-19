### Getting Started with Kotti
For the labs we will be using multi-geth install the following
```
 git clone https://github.com/multi-geth/multi-geth
 or 
 grab latest release: https://github.com/multi-geth/multi-geth/releases
```
Let's start multigeth and sync kotti for later add the multi-geth geth to your path
```
geth --kotti --rpc --rpcport 8545 --rpccorsdomain "127.0.0.1"
# or for demo's sake
geth --kotti --rpc --rpcport 8545 --rpccorsdomain "*"
```
In another terminal 
```
geth --kotti attach
```
Try using the console
```
eth.blockNumber
```
Let's see what multi-geth supports using RPC discover
```
curl -X POST -H 'Content-Type: application/json' --data '{"jsonrpc":"2.0","method":"rpc.discover","params":[],"id":1}' http://localhost:8545
```

There's an easier way to explore the [docs](https://playground.open-rpc.org/?urlSchema=http://localhost:8545)

