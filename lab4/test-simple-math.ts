import {SimpleMath} from "./generated-client/typescript/build/index";
const client = new SimpleMath({
  "transport": {
    host: "127.0.0.1",
    port: 9003,
    type: "http",
  }
});

client.addition(2,2)
.then(console.log);