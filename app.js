var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get('/carti', function (req, res) {
  res.send('Cartile te fac neprost!');
});

app.get('/carti/:id', function (req, res) {

  res.send(' Cartile te fac neprost! ' + req.params.id);
});

app.use(express.static('public'));
app.listen(8000, function(){
    console.log("A pornit serverul pe portul 8000");
})
