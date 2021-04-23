const express = require('express')
const PORT = process.env.PORT || 3001;

const app = express()

const fs = require('fs')
const path = require('path')

const {saveNote} = require('./public/assets/js/index')
const {notes} = require('./data/notes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))




//post a new note
app.post('/api/notes', (req, res) => {
    req.body.id = Number((notes.length + 1).toString())
    const newNote = req.body
    //saveNote() creates an error for "window" being undefined on public/assets/js/index.html page
    saveNote(newNote)

    res.json(newNote)
});
//landing page display
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
//notes display, add new note page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});
//list all notes in json
app.get('/api/notes', (req, res) => {
    res.json(notes)
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})