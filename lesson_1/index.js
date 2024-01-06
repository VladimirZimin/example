const fs = require("fs").promises;

const users = require("./users");
// console.log(users);

const { admins } = require("./users");
// console.log(admins);

const { getCurrentMonth } = require("./data");
const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month`);

const currentMonth1 = require("./data").getCurrentMonth();
// console.log(`Now ${currentMonth1} month`);

const readFile = async () => {
  const text = await fs.readFile("./files/file2.txt", "utf-8");
  console.log(text);
  // const buffer = await fs.readFile("./files/file.txt");
  // const text = buffer.toString();
  // console.log(text)
};

readFile();

const addText = async () => {
  await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
};

addText();

const replaceText = async () => {
  const result = await fs.writeFile("./files/file1.txt", "Ницше");
  console.log(result);
};

replaceText();
