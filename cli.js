#!/usr/bin/env node
var checkEnvArg = require("./index");
var envArgPair = process.argv.splice(-1)[0].split("--")[1].split("=");

if (envArgPair[0] === "envName") {
  checkEnvArg(envArgPair[1]);
} else {
  checkEnvArg();
}
