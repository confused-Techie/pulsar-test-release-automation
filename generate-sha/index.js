
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
