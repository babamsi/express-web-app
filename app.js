const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;


const app = express();
//app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('cover.ejs', {
        name: "Suhayb Cabdulahi",
        title: "Web Developer"
    })
})
app.get('/index', (req, res) => {
    res.render('index.ejs', {
        name: "Suhayb Cabdulahi",
        title: "Web Development"
    })
})
app.get('/about', (req, res) => {
    res.render('about.ejs', {
        name: "Suhayb Cabdulahi",
        title: "Full Stack Web Developer"
    })
})
app.get('/Contact', (req, res) =>{
    res.render('Contact.ejs')
})
app.get('/signup', (req, res) => {
    res.render('signup.ejs');
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})