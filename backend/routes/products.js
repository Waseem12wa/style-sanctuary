import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.json');

const getProducts = () => {
    const data = fs.readFileSync(productsPath, 'utf-8');
    return JSON.parse(data);
};

// Get all products
router.get('/', (req, res) => {
    try {
        const products = getProducts();
        const { category, search } = req.query;

        let filtered = products;

        if (category) {
            filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }

        if (search) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        }

        res.json(filtered);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Get single product
router.get('/:id', (req, res) => {
    try {
        const products = getProducts();
        const product = products.find(p => p.id === parseInt(req.params.id));

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

export default router;
