const { db, table } = require("../db/database");

const createOrder = (from, to) => {
  db.serialize(() => {
    db.run(
      `INSERT INTO ${table} (from_location, to_location) VALUES ("${from}", "${to}");`,
      function (db, err) {
        if (err) {
        console.log("Error code " + err.errno + ": " + err.message);
          return;
        } else {
          console.log(this.lastID);
        }
      }
    );
  });
  db.close();
};

module.exports = {
  createOrder,
};
