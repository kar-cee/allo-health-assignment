const express = require('express');
const data = require('./menu.json');
const app = express();
const port = 8000; 

app.use(express.json()); 

//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true); 

    if (req.method === 'OPTIONS') {
        
        return res.sendStatus(200);
    }

    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




app.get('/api/menu', (req, res) => {
    res.send(data);
});

