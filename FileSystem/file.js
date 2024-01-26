const fs = require("fs");

//reading files//
fs.readFile("./Docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//Writing files//
fs.writeFile("./Docs/blog1.txt", "Hello World", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("File Writen");
});

//if the file doenst exist, it will create a new file
fs.writeFile("./Docs/blog2.txt", "Hello World", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("File Created");
});

//Directories//
//line to check if the directorie exist before creating
if (!fs.existsSync("./assets")) {
  //line to create directore
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directorie Created");
  });
} else {
  //delete directorie
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directorie Deleted");
  });
}

//delete files

if (fs.existsSync("./Docs/deleteme.txt")) {
  fs.unlink("./Docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
