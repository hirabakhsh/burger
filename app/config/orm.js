var connection = require('./connection.js')

var orm = {
  
  select: function(table, callback) {
    var qry = 'SELECT * FROM ??';
    connection.query(qry, [table], function(err, res) {
      if (err) throw err;

      callback(res);
    });
  },

  insert: function(table, field1, field2) {
    var qry = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(qry, [table, field1, field2], function(err, res) {
      if (err) throw err;
    });
  },

  update: function(table, field1, field2, value) {
    var qry = 'UPDATE ?? SET ?? = 1 WHERE ?? = ?';
    connection.query(qry, [table, field1, field2, value], function(err, res) {
      if (err) throw err;
    });
  },

  delete: function(table, field1, value) {
    var qry = 'DELETE FROM ?? WHERE ?? = ?';
    connection.query(qry, [table, field1, value], function(err, res) {
      if (err) throw err;
    });
  }

};

module.exports = orm;