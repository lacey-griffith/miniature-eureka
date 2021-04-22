const express = require('express')
const PORT = process.env.PORT || 3002;

const app = express()

const fs = require('fs')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

const {notes} = require('./data/notes')







app.post('/api/notes', (req, res) => {
    res.json(note)
});
//landing page display
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})