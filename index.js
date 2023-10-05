/* 
  File Name: index.js
  Student's Name: Amirhossein Mozafarikhosravi
  StudentID: 301223709
  Date: October 2nd, 2023
*/

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home'
  });  
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Me'
  });  
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    pageTitle: 'Projects'
  }); 
});

app.get('/services', (req, res) => {
  res.render('services', {
    pageTitle: 'Services'
  });  
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact Me'
  }); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
