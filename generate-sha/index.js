const github = require("@actions/github");
const context = github.context;

console.log(process.env);
console.log(context);

function hasEnoughArtifacts() {
  return (process.env.release.artifacts.length === 8);
}

(async () => {

  console.log(process.env.release);

  if (hasEnoughArtifacts()) {

  } else {
    console.log(`Not enough artifacts exist to act: '${process.env.release.artifacts.length}'`);
    process.exit(0);
  }

})();
