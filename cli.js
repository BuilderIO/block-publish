#!/usr/bin/env node
var checkEnvArg = require("./index");
var envArg = process.argv.splice(-1)[0].split("--")[1];
var finalArgument;

if (envArg) {
  var envArgPair = process.argv.splice(-1)[0].split("--")[1].split("=");
  finalArgument = envArgPair[0] === "envName" ? envArgPair[1] : "";
}

checkEnvArg(finalArgument);
