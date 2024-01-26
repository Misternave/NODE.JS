const fs = require("fs");

const readStream = fs.createReadStream("./Docs/blog3.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./Docs/blog4.txt");

/* readStream.on("data", (chunk) => {
  console.log("new Chunck");
  console.log(chunk);
  writeStream.write("\nNewChunck\n");
  writeStream.write(chunk);
}); */

/* does the sema as the above code */
//Pipping

readStream.pipe(writeStream);
