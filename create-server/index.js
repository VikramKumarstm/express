const express = require('express')

const app = express();
const PORT= 8080

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.listen(PORT, () => {
    console.log(`Server listen of localhost:${PORT}`);
    
})