var orm = require('../config/orm.js');


var burger = {
  all: function(cb) {
    orm.select('burgers', function(res) {
      cb(res);
    })
  },

  create: function(item) {
    orm.insert('burgers', 'burger_name', item);
  },

  update: function(id) {
    orm.update('burgers', 'devoured', 'id', id);
  },

  delete: function(id) {
    orm.delete('burgers', 'id', id);
  }

}

module.exports = burger;