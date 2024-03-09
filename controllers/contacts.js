const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const Contact = require('../models/contact');

const getSingle = async (req, res) => {
    try {
        const inputId = req.params.id;
        const objectId = ObjectId(inputId);
        const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: objectId });
        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createContact = async (req, res) => {
    try {
        const contact = new Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });
        const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
        res.status(201).json({
            message: 'Created new contact successfully.',
            contact: response.ops[0]
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateContact = async (req, res) => {
    try {
        const inputId = req.params.id;
        const objectId = ObjectId(inputId);
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: objectId }, contact);
        if (response.modifiedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Updated contact successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const inputId = req.params.id;
        const objectId = ObjectId(inputId);
        const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: objectId });
        if (response.deletedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Deleted contact successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getSingle, createContact, updateContact, deleteContact };
