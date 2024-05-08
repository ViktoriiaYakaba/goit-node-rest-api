const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, '../db/contacts.json');

 
async function listContacts() {
  const contacts = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(item => item.contactId === contactId)
  return result || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

async function updateContact(contactId, data) {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
    } 
    contacts[index] = { contactId, ...data };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index]
}

module.exports= { listContacts, getContactById, removeContact, addContact, updateContact };
