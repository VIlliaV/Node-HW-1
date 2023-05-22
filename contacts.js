const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db", "contacts.json");

/**
 *Getting a list of contacts
 * @returns JSON.parse(contacts)
 */
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
}

/**
 *Getting a contact by id
 * @param {string} contactId
 *
 */
async function getContactById(contactId) {
  const list = await listContacts();
  const contact = list.find((contact) => contact.id === contactId);
  if (!contact) return;
  return contact;
}
/**
 * Remove a contact by id
 * @param {string} contactId
 */
async function removeContact(contactId) {
  const list = await listContacts();
  const index = list.findIndex((item) => item.id === contactId);
  if (index === -1) return;

  const [deletedContact] = list.splice(index, 1);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return deletedContact;
  } catch (error) {
    console.log(error.message);
  }
}
/**
 *add a contact
 * @param {string} name
 * @param {string}  email
 * @param {string}  phone
 *
 */
async function addContact(name, email, phone) {
  const contact = { id: nanoid(), name, email, phone };
  const list = await listContacts();
  list.push(contact);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return contact;
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { listContacts, getContactById, removeContact, addContact };
