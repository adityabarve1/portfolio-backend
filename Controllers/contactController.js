const Contact = require('../Models/Contact');

exports.saveContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });

        const contact = await Contact.create({ name, email, message });
        req.io.emit('new-contact'); // Emit a WebSocket event
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save contact' });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
    
};
