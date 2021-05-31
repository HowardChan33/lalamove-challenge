const { db, table } = require("../db/database");

const listOrder = () => {
  db.serialize(() => {
    db.each(`SELECT * FROM ${table} WHERE is_taken = "0" `, (err, rows) => {
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
      } else
        console.log(
          rows.id + "," + rows.from_location + "," + rows.to_location
        );
    });
  });
  db.close();
};

module.exports = {
  listOrder,
};
