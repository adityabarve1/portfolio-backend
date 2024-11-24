exports.protect = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
};
