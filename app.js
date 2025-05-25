const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const corsOptions = {
    origin: [
        'https://weselldeadlots.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

app.get('/getstoredetails', (req, res) => {
    const shopifyConfig = {
        storeUrl: process.env.STORE_URL,
        accessToken: process.env.ACCESS_TOKEN,
        apiVersion: process.env.API_VERSION,
    };
    res.json(shopifyConfig);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
