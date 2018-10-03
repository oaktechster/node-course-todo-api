const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var newTodo = new Todo({
//   text: 'Cook dinner',
//   completed: false
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: ' Edit this video '
// });
//
// otherTodo.save().then((doc) => {
//    console.log('Saved todo', doc)
//  }, (e) => {
//    console.log('Unable to save todo');
// });

// var newUser = new User({
//   email: 'test@test.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user',doc);
// }, (e) => {
//   console.log('Unable to save user');
// });

module.exports = {mongoose};
