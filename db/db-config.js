// ==================================================

// // SQL
// const s3 = require("sqlite3").verbose();
// // let sql;
// // let params;
// const fErr = (err) => {
//   if (err) return console.log(err);
// };

// // connect to DB
// const db = new s3.Database(path.resolve(__dirname, "test.db"), s3.OPEN_READWRITE, fErr);

// // // create table
// // sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)`;
// // db.run(sql);

// // // drop table
// // sql = `DROP TABLE IF EXISTS users`;
// // db.run(sql);

// // // insert data into table
// // sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`;
// // db.run(sql, ["Josh", "holloway", "joshDotJS", "1234", "josh@josh.com"], fErr);

// // update:
// // sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// // db.run(sql, ["Steve", 1], fErr);

// // delete:
// // sql = `DELETE FROM users WHERE id = ?`;
// // db.run(sql, [1], fErr);

// // query the data
// // sql = `SELECT * FROM USERS`;
// // db.all(sql, [], (err, rows) => {
// //   if (err) return console.log(err);
// //   rows.forEach((row) => {
// //     console.log(row);
// //   });
// // });

// // ==================================================

// module.exports = db;