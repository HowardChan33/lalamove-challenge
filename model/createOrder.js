const { db, table } = require("../db/database");

const createOrder = (from, to) => {
  db.serialize(() => {
    db.run(
      `INSERT INTO ${table} (from_location, to_location) VALUES ("${from}", "${to}");`,
      function (err, rows) {
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
