const Contact = require('./models/contact');

// Example route to create a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (err) {
    console.error('Failed to create contact', err);
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

// Example route to fetch all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error('Failed to fetch contacts', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Add more routes for updating and deleting contacts as needed
