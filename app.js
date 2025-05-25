const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
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
        storeUrl: "738eda.myshopify.com",
        accessToken: "f6558466e9d3ffd0edfeda79dedc938a",
        apiVersion: "2024-04",
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
