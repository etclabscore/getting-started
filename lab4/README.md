### Open-RPC a descriptive JSON-RPC meta language

#### Getting started 
We will extend an open-rpc test document to support new functionality and use our tooling to create an end to end test.

#### Requirements 
node > 10

#### Mock-Server 
Let's install mock-server to generate a mock server from an open-rpc document
https://github.com/open-rpc/mock-server
```
npm install -g @open-rpc/mock-server
```
Let's test mock-server
```
open-rpc-mock-server -d ./simple-math-openrpc.json -p 9003
```
Let's try it from the inspector 
https://inspector.open-rpc.org lets test the rpc.discover method

Alternatively curl still works as well
```
curl -X POST \
  http://localhost:9003/ \
  -H 'Content-Type: application/json' \
  -d '{
  "jsonrpc": "2.0",
  "method": "addition",
  "params": [
    2,
    2
  ],
  "id": 1
}'
```

Let's create a mock extension for another math operation
so that our mockserver returns a negative number

```
curl -X POST \
  http://localhost:9003/ \
  -H 'Content-Type: application/json' \
  -d '{
  "jsonrpc": "2.0",
  "method": "addition",
  "params": [
    2,
    -4
  ],
  "id": 1
}'
```
It would be great to use code to test our mock server
Let's generate a client
```
npm install -g @open-rpc/generator-client
```

Here we'll generate a typescript client for our service
```
open-rpc-generator-client -d ./simple-math-openrpc.json -o generated-client --ts-name "simple-math-extended"
```
Finally we test the client
```
npx tsc test-simple-math.ts
node test-simple-math.js
```
Using this technology we can generate an alternative to web3
that is document driven checkout [EIP-1901](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1901.md), one Ethereum interface to describe them all.

