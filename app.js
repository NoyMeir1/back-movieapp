const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("movies api")
})

app.get('/movies', (req, res)=>{
    fetch('https://api.androidhive.info/json/movies.json')
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => console.log(error))
})

app.listen(port);
