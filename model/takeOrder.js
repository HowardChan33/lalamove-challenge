const { db, table } = require("../db/database");

const takeOrder = (id) => {
  db.serialize(() => {
    db.all(`SELECT * FROM ${table} WHERE id=${id}`, (err, rows) => {
      if (err) {
        console.log("Error code " + err.errno + ": " + err.message);
        return;
      }
      if (rows.length == 0) {
        console.log("order does not exist");
        return;
      } else if (rows[0].is_taken == "1") {
        console.log("order already taken");
        return;
      } else {
        db.run(
          `UPDATE ${table} SET is_taken = "1" WHERE id = ${id};`,
          (err) => {
            if (err) {
                console.log("Error code " + err.errno + ": " + err.message);
              return;
            }
          }
        );
      }
    });
  });
};

module.exports = {
  takeOrder,
};
