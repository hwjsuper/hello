var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/about', function(req, res) {
  res.render('about');
});
router.get('/portfolio', function(req, res) {
  res.render('portfolio');
});
router.get('/blog', function(req, res) {
 res.render('blog');
});

//connect to mongodb
mongoose.connect('mongodb://localhost/hello');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
    task: String
});

var Task = mongoose.model('Task', Task);

router.get('/post',function(req,res){
  Task.find({}, function (err, posts) {
  	res.render('post',{
      posts: posts
    });
  });
});

router.post('/post',function(req,res) {
  var task = new Task(req.body.task);
  task.save(function(err){
  	if (!err) {
  	  res.redirect('/post');
  	}
  	else {
      res.redirect('/post');
  	}
  })
});

module.exports = router;
