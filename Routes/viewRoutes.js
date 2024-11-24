const express = require('express');
const { trackView } = require('../Controllers/viewController');

const router = express.Router();

router.post('/', trackView);

module.exports = router;
