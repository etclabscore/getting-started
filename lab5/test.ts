import ServiceRunnerClient from "@etclabscore/jade-service-runner-client";
import SimpleMathClient from "../lab4/generated-client/typescript/src/index";

const client = new ServiceRunnerClient({
  transport: {
    type: "http",
    port: 8002,
    host: "localhost",
    path: "/",
  }});

const smc = new SimpleMathClient({
  transport: {
    type: "http",
    port: 8002,
    host: "localhost",
    path: "/simple-math/http/1.0.0",
  }});

const setup = async () => {
  const services = await client.listServices("all");
  // tslint:disable-next-line:no-console
  console.log(JSON.stringify(services, null, 2));
  await client.installService("simple-math", "1.0.0");
  await client.startService("simple-math", "1.0.0", "http");
};

setup()
.then(() => smc.addition(2, 2))
// tslint:disable-next-line:no-console
.then(console.log);
