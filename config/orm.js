const connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function convertToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '"' + value + '"';
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: (tableInput, callBack) => {
        var queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            callBack(result);
        });
    },
    create: (table, colum, value, callBack) => {
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += colum.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(value.length);
        queryString += ') ';
        console.log(queryString);

        connection.query(queryString, value, (err, result) => {
            if (err) throw err;
            callBack(result);
        });

    },
    update: (table, object, id, callBack) => {
        var queryString = 'UPDATE ' + table;
        queryString += ' SET ';
        queryString += convertToSql(object);
        queryString += ' WHERE ';
        queryString += id;
        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            callBack(result);
        });
    },
    delete: (table, id, callBack) => {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += id;

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            callBack(result);
        });
    }
}

module.exports = orm;