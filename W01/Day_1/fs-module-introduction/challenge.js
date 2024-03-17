const fs = require("fs");

// File Reading
exports.readFileAsync = (path) => {
  return fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File contents: ", data);
    }
  });
};

// File Writing
exports.writeFileAsync = (path, content ) => {
    return fs.writeFile(path, content, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("File created successfully.")
        }
    })
}

// Processing Logic
exports.processFiles = (files) => {
    return files.forEach(file => {
        return fs.appendFile(file, '\n' + Date(), (err) => {
            if (err) return 'Couldnt process file.'
            else console.log('Done.')
        })      
    });
}
// processFiles(['./Luidji_Miskine.md', './Luidji_Téléfoot.md']);

// 