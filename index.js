const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

// const rl = readline.createInterface({
//   input: process.stdin, // введення зі стандартного потоку
//   output: process.stdout, // виведення у стандартний потік
// });

console.log(addContact("Vasya", "email", "0707070707"));
