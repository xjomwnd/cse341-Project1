const express = require('express');
const routes = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/contact');

// GET all contacts
routes.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new contact with input validation
routes.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('phone').notEmpty().withMessage('Phone is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update a contact
routes.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (req.body.name) {
            contact.name = req.body.name;
        }
        if (req.body.email) {
            contact.email = req.body.email;
        }
        if (req.body.phone) {
            contact.phone = req.body.phone;
        }
        const updatedContact = await contact.save();
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a contact
routes.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        await contact.remove();
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = routes;
