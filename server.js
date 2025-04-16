const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all requests
app.use(cors());

app.get('/sudoku', async (req, res) => {
    try {
        // Fetch data from the blocked API
        const response = await axios.get('https://youdosudoku.com/api/');
        
        // Send the response back to the frontend
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
