export default function checkEvn() {
  if (!process.env.ALLOW_PUBLISH) {
    console.log(
      `ERROR!!!\nDirect access to npm publish is blocked.\nPlease run a publish script like npm release:dev.`
    );
    process.exit(1);
  }
}
