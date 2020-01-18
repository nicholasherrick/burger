const orm = require('../config/orm.js');

var burger = {
    all: (callBack) =>{
        orm.selectAll('burgers', (res) =>{
            callBack(res);
        });
    },
    create: (colum, value, callBack) =>{
        orm.create('burgers', colum, value, (res) =>{
            callBack(res);
        });
    },
    update: (object, id, callBack) =>{
        orm.update('burgers', object, id, (res) =>{
            callBack(res);
        });
    },
    delete: function(id, callBack) {
        orm.delete("burgers", id, function(res) {
          callBack(res);
        });
      }
}

module.exports = burger;