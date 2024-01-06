const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { program } = require("commander");

const books = require("./books");

// console.log(books);

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAllBooks();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "addBook":
      const newBook = await books.addBook({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("Unknown action");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "zCd_RioNMOBaQwAXnc8Px" });
// invokeAction({ action: "addBook", title: "Worm", author: "Jonh C. McCrae" });
// invokeAction({
//   action: "updateById",
//   id: "LAkb5qyJsaw80WfHgkwTX",
//   title: "Worm",
//   author: "Taras Shevchenko",
// });
// invokeAction({ action: "deleteById", id: "btuFHGcGXB_n0VI_Oxuml" });

// =================================
// process.argv

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// =================================
// yargs

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);

// =================================
// commander

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");

program.parse();

const options = program.opts();
invokeAction(options);
