const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PageView', pageViewSchema);
