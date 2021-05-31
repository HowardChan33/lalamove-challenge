const { db, table } = require("../db/database");

const listOrder = () => {
  db.serialize(() => {
    db.each(`SELECT * FROM ${table} WHERE is_taken = "0" `, (err, rows) => {
      if (err) {
        console.log("Error code " + err.errno + ": " + err.message);
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
