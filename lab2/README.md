### Let's explore setting up our own testnet
```
cd lab2 
```
Here we have mgeth.json which is  our exaple genesis block specification
```
cat mgeth.json
```
Let's boot it up
```
geth --datadir="~/lab2/test/" init mgeth.json
```
Let's connect to our node
```
geth attach /your/ipc/path
ex.
~/lab2/test/geth.ipc
```
You can generate bootnodes using the bootnode cmd
if you've installed all cmdline tools along with multi-geth binary
