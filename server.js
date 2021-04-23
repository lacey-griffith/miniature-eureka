const express = require('express')
const PORT = process.env.PORT || 3001;

const app = express()

const fs = require('fs')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

const {notes} = require('./data/notes')







app.post('/api/notes', (req, res) => {
    req.body.id = Number((notes.length + 1).toString())
    const newNote = req.body
    notes.push(newNote)
    console.log(newNote)

    res.json(newNote)
});
//landing page display
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});
app.get('/api/notes', (req, res) => {
    res.json(notes)
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})