var DEFAULT_ENV_STRING = "ALLOW_PUBLISH";

function checkEvn(envString = DEFAULT_ENV_STRING) {
  if (!process.env[envString]) {
    console.log(
      `ERROR!!!\nDirect access to npm publish is blocked.\nPlease run a publish script like npm release:dev.`
    );
    process.exit(1);
  }
}

module.exports = checkEvn;
