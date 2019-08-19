"use strict";
exports.__esModule = true;
var index_1 = require("./generated-client/typescript/build/index");
var client = new index_1.SimpleMath({
    "transport": {
        host: "127.0.0.1",
        port: 9003,
        type: "http"
    }
});
client.addition(2, 2)
    .then(console.log);
