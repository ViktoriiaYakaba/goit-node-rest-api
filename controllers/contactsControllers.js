const { HttpError, ErrorHandler} = require("../helpers");
const { Contact } = require("../models/contacts");


 const getAllContacts =  async (req, res) => {
        const results = await Contact.find();
        res.json(results);
};

const getOneContact = async(req, res) => {
        const { id } = req.params;
        const results = await Contact.findById(id);
        if (!results) {
            throw HttpError(404, 'Not found');
        }
        res.json(results);
};

 const deleteContact = async(req, res) => {
        const { id } = req.params;
        const results = await Contact.findByIdAndDelete(id);
        if (!results) {
            throw HttpError(404, "Contact not found");
        }
        res.json({
            message: "Delete success"
        }) 
};

 const createContact = async(req, res) => {
        const results = await Contact.create(req.body);
        res.status(201).json(results);
};

const updateContact = async(req, res) => {
        const { id } = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
        if (!result) {
            throw HttpError(400, "Body must have at least one field");
        }
        res.json(result);   
};

const updateStatusContact= async(req, res) => {
        const { id } = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
        if (!result) {
            throw HttpError(400, "Not found");
        }
        res.json(result);   
};

module.exports = {
    getAllContacts: ErrorHandler(getAllContacts),
    getOneContact: ErrorHandler(getOneContact),
    deleteContact: ErrorHandler(deleteContact),
    createContact: ErrorHandler(createContact), 
    updateContact: ErrorHandler(updateContact),
    updateStatusContact: ErrorHandler(updateStatusContact),
}
