const express = require('express')
const PORT = process.env.PORT || 3001;

const app = express()

const fs = require('fs')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const {notes} = require('./data/notes')







function createNote(body, notesArr) {
    const note = body;
    notesArr.push(note)
    fs.writeFileSync(
        path.join(__dirname, './data/notes.json'),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    return note;
}



app.get('/api/notes', (req, res) => {
    res.json(notes)
});
app.post('/api/notes', (req, res) => {
    const note = createNote(req.body, notes)
    req.body.id = notes.length.toString();
    res.json(note)
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})