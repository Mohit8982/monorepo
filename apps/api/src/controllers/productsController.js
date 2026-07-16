import * as service from '../services/productService.js';

export const list = (req, res, next) => {
  try {
    const { q, page, limit } = req.query;
    const result = service.list({ q, page, limit });
    const { items, total, page: p, limit: l } = result;

    const totalPages = Math.max(1, Math.ceil(total / l));
    const pagination = {
      page: p,
      limit: l,
      totalRecords: total,
      totalPages,
      hasNextPage: p < totalPages,
      hasPreviousPage: p > 1,
    };

    res.json({ data: items, pagination });
  } catch (err) {
    next(err);
  }
};

export const getById = (req, res, next) => {
  try {
    const item = service.getById(req.params.id);
    if (!item) return res.status(404).json({ error: 'not_found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
};
