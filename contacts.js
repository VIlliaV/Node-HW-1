const fs = require("fs/promises");
const readline = require("readline");
const path = require("path");

const contactsPath = path.join(__dirname, "/db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
    // console.log("🚀 ~ list:", list);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  const list = await listContacts();
  const contact = list.find((contact) => contact.id === contactId);
  //   console.log("🚀 ~ contact:", contact);
  return contact;
}

async function removeContact(contactId) {
  const list = await listContacts();
  const contacts = list.filter((contact) => contact.id !== contactId);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  } catch (error) {
    console.log(error.message);
  }
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = { listContacts, getContactById, removeContact };
