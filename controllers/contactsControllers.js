import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts =  (req, res) => {
    const results =  contactsService.listContacts();
    res.JSON(results);
};

export const getOneContact = (req, res) => {
   
};

export const deleteContact = (req, res) => {

};

export const createContact = (req, res) => {

};

export const updateContact = (req, res) => {
    
};
