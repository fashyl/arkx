var XLSX = require("xlsx");
const readline = require("readline");
const fs = require("fs");

function processEmployeeData(input, output) {
  // 9ra l'excel (using xlsx)
  const workbook = XLSX.readFile(input);
  const worksheet = workbook.Sheets["Sheet"];
  const data = XLSX.utils.sheet_to_json(worksheet);

  // l'Bonus n3am'aSsi
  const newColumns = data.map((employee) => {
    let BonusAmount, BonusPercentage;

    if (employee.AnnualSalary < 50000) {
      BonusPercentage = 0.05;
    } else if (
      employee.AnnualSalary >= 50000 &&
      employee.AnnualSalary <= 100000
    ) {
      BonusPercentage = 0.07;
    } else {
      BonusPercentage = 0.1;
    }

    BonusAmount = Math.floor(employee.AnnualSalary * BonusPercentage);

    return {
      ...employee,
      bonusPercentage: BonusPercentage,
      bonusAmount: BonusAmount,
    }; // returns array jdida with each element being { previousData + processed}
  });

  // spreadsheets using js, nice.
  const newSheet = XLSX.utils.json_to_sheet(newColumns);

  newSheet["A1"] = { v: "Employee" };
  newSheet["B1"] = { v: "AnnualSalary" };
  newSheet["C1"] = { v: "BonusPercent" };
  newSheet["D1"] = { v: "BonusAmount" };
  // reminder! [A] | [B] | [C] | [D]
  // aaand [1] [A1] | [B1] | [C1] | [D1]
  // and a [2] [A2] | [B2] | [C2] | ..
  // anddd [3] [A3] .. rak fahm

  const newFile = XLSX.utils.book_new(); // workbook > worksheet
  const newPath = `../assets/${output}.xlsx`;
  XLSX.utils.book_append_sheet(newFile, newSheet, "updatedUsers");
  XLSX.writeFile(newFile, newPath);
  console.log(`New processed Data written to ${newPath}`);
}

async function getInput() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Please provide the path to your file :", (filePath) => {
      rl.question(
        `${filePath}, What would you like as the output file name : `,
        (fileName) => {
          rl.close();
          if (!fs.existsSync(filePath)) {
            reject(new Error("File Not Found!"));
          } else {
            resolve({ filePath, fileName });
          }
        }
      );
    });
  });
}

getInput()
  .then(({ filePath, fileName }) => processEmployeeData(filePath, fileName))
  .catch((error) => console.log(error.message));
