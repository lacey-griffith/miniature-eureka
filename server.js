const express = require('express')
const PORT = process.env.PORT || 3001;

const app = express()

const fs = require('fs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const {notes} = require('./data/notes')












app.get('/api/notes', (req, res) => {
    res.json(notes)
});
// app.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//     res.json(req.body)
// });
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})