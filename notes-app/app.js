const fs = require("fs");
fs.writeFileSync("notes.txt", "This is Node.js course. ");
fs.appendFileSync("notes.txt", "Node.js Course is by Andrew.");

const getNotes = require("./notes.js");
const Notes = getNotes();
console.log(Notes);

const validator = require("validator");
console.log(validator.isEmail("s@gmail.com"));
console.log(validator.isEmail("sgmail.com"));
console.log(validator.isURL("https://hy.com"));
console.log(validator.isURL("https/med.io"));

const chalk = require("chalk");
const cmdArguement = process.argv[2];
console.log(chalk.bgBlue.bold.underline.inverse(p));
console.log(process.argv[2]);
if (cmdArguement === "add") {
  console.log(" 9");
} else if (p === "sub") {
  console.log("1");
}

const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.2.0");
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Adding a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Adding a body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    notes.ListNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Adding a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
yargs.parse();
