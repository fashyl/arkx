const express = require('express');
const fs = require('fs')

// Server creation and config
const app = express();
app.use(express.json); // to parse json
app.use(express.urlencoded({extended:true})); // to parse urlencoded
const port = 3030;

// EJS
app.set('view engine', 'ejs');

const blogs = require('./models/database');
app.use('/blogs', (req, res, next) => {
    res.render('blogs')
})

app.post('/new',(req, res) =>{
    const { title, snippet } = req.body;
    blogs.push({ title, snippet });
    res.status(302).redirect("/blogs");
})

app.get('/home', (req, res, next) => {
    res.render('homepage.ejs') // By default looks for the views folder.
})

app.get('/about', (req, res, next) => {
    res.render('about.ejs', { title: 'About Us Page'}) // Render variables?
})

// app.use('/', (req, res, next) => { // Serving static files 
//     fs.readFile('./static/index.html', 'utf-8', (err, data) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.send(data);
//         }
//     })
//     res.sendFile('./static/index.html', {root:__dirname});
// })

app.listen(port, () => {
    console.log('Listening on port 3030...');
})