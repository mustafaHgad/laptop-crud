export const addCreatedAt = (req, res, next) => {
  req.body.created_At = new Date().toISOString();
  next();
};

export const addUpdatedAt = (req, res, next) => {
  req.body.updated_At = new Date().toISOString();
  next();
};
