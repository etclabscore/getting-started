### Running Decentralized Services

#### Service Runner Getting Started

Let's install service-runner ui
```
 https://github.com/etclabscore/jade-service-runner-ui/releases
```
Finally lets use service runner and playground to make request to kotti
https://playground.open-rpc.org/

#### Adding our own custom services

Install service runner cmdline
```
npm install -g jade-service-runner
```
Build our own service
```
npm run build
```

Inspect the configuration for the new service
```
cat extended_config.json
```

Run the new service with service runner
```
 /Applications/jade-service-runner-ui.app/Contents/MacOS/jade-service-runner-ui -c extended_config.json
```
For more resources

*Resources*
 https://github.com/etclabscore/jade-service-runner-ui
 https://open-rpc.org
 https://jade.builders