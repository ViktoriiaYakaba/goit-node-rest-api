const contactsService = require("../services/contactsServices");
const HttpError =require( "../helpers/HttpError");
const addSchema = require("../schemas/contactsSchemas");



 const getAllContacts =  async (req, res, next) => {
   try {const results =  await contactsService.listContacts();
       res.JSON(results);
   }
   catch (error) {
       next(error)
    }
};

const getOneContact = async(req, res, next) => {
    try {
        const { id } = req.params;
        const results = await contactsService.getContactById(id);
        if (!results) {
            throw HttpError(404, 'Not found');
        }
        res.JSON(results);
    }
    catch (error) {
       next(error)
    }

};

 const deleteContact = async(req, res, next) => {
    try {
        const { id } = req.params;
        const results = await contactsService.deleteContact(id);
        if (!results) {
            throw HttpError(404);
        }
        res.JSON({
            message: "Delete sucess"
        }) 
    }
    catch (error) {
        next(error);
    }

};

 const createContact = async(req, res, next) => {
    try {
         const { error } = addSchema.validate(req.body);
        if (error){
            throw HttpError(400, error.message)
        }
        const results = await contactsService.addContact();
        res.status(201).json(results);
    }
    catch (error) {
       next(error)
    }

};

const updateContact = async(req, res) => {
    try {
        
    }
    catch (error) {
        next(error)
    }
    
};

module.exports = {
    getAllContacts,
    getOneContact,
    deleteContact,
    createContact, 
    updateContact,
}
