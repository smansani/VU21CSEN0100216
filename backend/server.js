const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors()); 
app.use(express.json()); 

const API_BASE_URL = 'http://20.244.56.144/test/companies';
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQ2NDM5LCJpYXQiOjE3MjQ3NDYxMzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI5NzAyZmNiLThhMTgtNDc0NS05Yzk1LWU4NWJmNDc1NjM5OCIsInN1YiI6InNtYW5zYW5pQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiZ29tYXJ0IiwiY2xpZW50SUQiOiIyOTcwMmZjYi04YTE4LTQ3NDUtOWM5NS1lODViZjQ3NTYzOTgiLCJjbGllbnRTZWNyZXQiOiJLbWNzVHFUdFFTY3BPTWZhIiwib3duZXJOYW1lIjoiTS5TcmVlaGFyc2hhIiwib3duZXJFbWFpbCI6InNtYW5zYW5pQGdpdGFtLmluIiwicm9sbE5vIjoiVlUyMUNTRU4wMTAwMjE2In0.0n6PVVHkhr0kDZtTGIB5oqYdJgHhsMbgNnZuO_k9tro"

// Route to fetch products
app.get('/api/products', async (req, res) => {
    try {
        const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
        const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

        let allProducts = [];

        for (const company of companies) {
            for (const category of categories) {
                const url = `${API_BASE_URL}/${company}/categories/${category}/products?top=10&minPrice=1&maxPrice=10000`;
                const response = await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                });

                if (response.data && response.data.products) {
                    allProducts = [...allProducts, ...response.data.products];
                }
            }
        }

        res.json(allProducts);
    } catch (err) {
        console.error('Error fetching products:', err.message);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
