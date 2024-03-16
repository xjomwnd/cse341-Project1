// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  // Add any other fields you need for the Contact model
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;