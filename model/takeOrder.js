const { db, table } = require("../db/database");

const takeOrder = (id) => {
  db.serialize(() => {
    db.all(`SELECT * FROM ${table} WHERE id=${id}`, (err, rows) => {
      if (err) {
        switch (err.errno) {
          case 1:
            console.log("Insertion error '301'");
            break;
          case 21:
            console.log("Connection error '302'");
            break;
          case 5:
            console.log("Incomplete query error '303'");
            break;
          default:
            console.log("Internal server error '500'");
        }
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
              switch (err.errno) {
                case 1:
                  console.log("Insertion error '301'");
                  break;
                case 21:
                  console.log("Connection error '302'");
                  break;
                case 5:
                  console.log("Incomplete query error '303'");
                  break;
                default:
                  console.log("Internal server error '500'");
              }
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
