const express = require( "express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} = require("../controllers/contactsControllers");

const {validateBody} = require("../helpers");

const schemas = require("../schemas/contactsSchemas");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(schemas.addSchema), createContact);

contactsRouter.put("/:id", validateBody(schemas.addSchema), );updateContact

module.exports = {contactsRouter};
