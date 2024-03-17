const { writeFileAsync, readFileAsync, processFiles } = require("./challenge");

const main = () => {
  try {
    writeFileAsync("./assets/lorem.txt", "Lorem Ipsum");
    readFileAsync("./assets/Luidji_Miskine.md");
    processFiles(["./assets/lorem.txt"]);
  } catch (error) {
    console.log(error);
  }
};

main();