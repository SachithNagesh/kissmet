const express = require('express')
const app = express()
app.set('view engine', 'pug');
const port = 3000
var date = new Date();
var time = date.toLocaleTimeString();
var n = date.toDateString();
app.get('/', (req, res) => res.render('index',{
   date: n,
   time : time
}));
app.listen(port, () => console.log('app listening on port ${port}!'))