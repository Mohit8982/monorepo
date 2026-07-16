import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productsPath = join(__dirname, '../data/products-1000.json');
const products = JSON.parse(readFileSync(productsPath, 'utf8'));

function toId(id) {
  return String(id);
}

export const list = ({ q, page = 1, limit = 50 } = {}) => {
  let items = Array.isArray(products) ? products.slice() : [];

  if (q) {
    const term = String(q).toLowerCase();
    items = items.filter(p =>
      ((p.title || '') + ' ' + (p.description || '')).toLowerCase().includes(term)
    );
  }

  const p = Math.max(1, Number(page) || 1);
  const l = Math.max(1, Number(limit) || 50);
  const total = items.length;
  const start = (p - 1) * l;
  const pageItems = items.slice(start, start + l);

  return { total, page: p, limit: l, items: pageItems };
};

export const getById = (id) => {
  const target = toId(id);
  return (Array.isArray(products) ? products : []).find(p => toId(p.id) === target || toId(p._id) === target) || null;
};
