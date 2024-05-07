import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts =  (req, res) => {
    const contacts =  contactsService.listContacts();
    res.status(200).JSON(contacts);
};

export const getOneContact = (req, res) => {

};

export const deleteContact = (req, res) => {

};

export const createContact = (req, res) => {

};

export const updateContact = (req, res) => {
    
};
