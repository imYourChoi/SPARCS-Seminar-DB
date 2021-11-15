/*
Item example:
{
  name: "과제하기",
  done: false
}
*/

const TodoModel = require("./models/todo");

let ITEMS = [];
let ID_COUNTER = 1;

// function getAll(callback) {
//   callback(ITEMS);
// }

function add(name, callback) {
  const newItem = new TodoModel({
    name
  });
  newItem.save((error, result) => {
    callback(result);
  });
}

function getAll(callback) {
  TodoModel.find({}, (error, result) => {
    if (error) {
      console.log(error);
      callback([]);
    } else {
      callback(result);
    }
  });
}

function setDone(id, callback) {
  TodoModel.findOne({_id:id})
  .then(doc => {
    if (doc.done === true) {
      TodoModel.updateOne({_id: id}, {done: false}, () =>{
        callback();
      })
    } else {
      TodoModel.updateOne({_id: id}, {done: true}, () =>{
        callback();
      })
    }
  })
  // TodoModel.updateOne({_id: id}, {done: true}, () =>{
  //   callback();
  // })
}

function remove(id, callback) {
  TodoModel.deleteOne({_id: id}, (error) => {
    callback();
  })
}

// function add(name, callback) {
//   const newItem = {
//     id: (ID_COUNTER++).toString(),
//     name,
//     done: false
//   };
//   ITEMS.push(newItem);
//   callback(newItem);
// }

// function remove(id, callback) {
//   ITEMS = ITEMS.filter(v => v.id !== id);
//   callback();
// }

// function setDone(id, callback) {
//   ITEMS = ITEMS.map(v => {
//     if (v.id === id) {
//       v.done = true;
//     }
//     return v;
//   });
//   callback();
// }

module.exports = {
  getAll,
  add,
  remove,
  setDone
};
