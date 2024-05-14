const express = require( "express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = require("../controllers/contactsControllers");

const {validateBody, isValidId} = require("../helpers");

const { shemas }= require("../schemas/models/contacts");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id",isValidId, getOneContact);

contactsRouter.delete("/:id",isValidId, deleteContact);

contactsRouter.post("/", validateBody(shemas.addSchema), createContact);

contactsRouter.put("/:id", isValidId, validateBody(shemas.addSchema), updateContact);

contactsRouter.patch("/:id/favorite", isValidId, validateBody(shemas.updateFavoriteSchema), updateStatusContact);

module.exports = {contactsRouter};
