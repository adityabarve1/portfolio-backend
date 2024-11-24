const express = require('express');
const { saveContact, getContacts } = require('../Controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', saveContact);
router.get('/', protect, getContacts);

module.exports = router;
