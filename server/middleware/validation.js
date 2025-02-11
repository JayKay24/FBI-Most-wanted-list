const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'id is required' });
  next();
};

module.exports = {
  validateId
};
