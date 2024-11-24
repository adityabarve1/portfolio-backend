const PageView = require('../Models/PageView');

exports.trackView = async (req, res) => {
    try {
        const token = req.headers['x-auth-token'];
        if (token !== process.env.ADMIN_TOKEN) return res.status(403).json({ error: 'Unauthorized' });

        await PageView.create({});
        res.status(201).json({ message: 'View tracked' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to track view' });
    }
};
