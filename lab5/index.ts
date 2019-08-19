import { testServer } from "./server";
import program from "commander";
import { parseOpenRPCDocument } from "@open-rpc/schema-utils-js";
program
  .option(
    "-p, --port <port>",
    "Set port for simple math",
    "8900",
  )
  .option(
    "-m, --mode <mode>",
    "Set protocol for simple math ws, wss, http, https",
    "ws",
  )
  .action(async () => {
    const port = parseInt(program.port, 10);
    const parsedDocument = await parseOpenRPCDocument("../lab4/simple-math-openrpc.json");
    const server = testServer(port, program.mode, parsedDocument, {});
    // tslint:disable-next-line:no-console
    console.log(`simplemath test server starting with ${program.mode} - ${program.port}`);
    server.start();
    // tslint:disable-next-line:no-console
    console.log("simplemath test server started");
  })
  .parse(process.argv);
