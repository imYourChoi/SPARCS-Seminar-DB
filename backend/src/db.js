/*
Item example:
{
  name: "과제하기",
  done: false
}
*/
let ITEMS = [];
let ID_COUNTER = 1;

function getAll(callback) {
  callback(ITEMS);
}

function add(name, callback) {
  const newItem = {
    id: (ID_COUNTER++).toString(),
    name,
    done: false
  };
  ITEMS.push(newItem);
  callback(newItem);
}

function remove(id, callback) {
  ITEMS = ITEMS.filter(v => v.id !== id);
  callback();
}

function setDone(id, callback) {
  ITEMS = ITEMS.map(v => {
    if (v.id === id) {
      v.done = true;
    }
    return v;
  });
  callback();
}

module.exports = {
  getAll,
  add,
  remove,
  setDone
};
