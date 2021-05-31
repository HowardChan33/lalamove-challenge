var sqlite3 = require("sqlite3").verbose();
var path = require("path");

let db = new sqlite3.Database(path.join(__dirname, "llmdatabase.db"), (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
  }
});

const test = () => {
  db.serialize(() => {
    db.run(
      `CREATE TABLE llm_order (from_location TEXT, to_location TEXT, id TEXT, is_taken TEXT DEFAULT 0)`
    );
    db.run(
      `INSERT INTO llm_order (from_location, to_location, id) VALUES ("Mongkok", "Lok Fu", 1000)`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
    db.each(`SELECT * FROM llm_order WHERE is_taken = 0 `, (err, rows) => {
      console.log(rows.from_location + "     " + rows.to_location);
    });
  });
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
};

const createOrder = (from, to) => {
  db.serialize(() => {
    db.run(
      `INSERT INTO llm_order (from_location, to_location) VALUES ("${from}", "${to}");`,
      function (err, rows) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(this.lastID);
        }
      }
    );
  });
  db.close();
};

const listOrder = () => {
  db.serialize(() => {
    db.each(`SELECT * FROM llm_order WHERE is_taken = "0" `, (err, rows) => {
      console.log(rows.id + "," + rows.from_location + "," + rows.to_location);
    });
  });
  db.close();
};

const takeOrder = (id) => {
  db.serialize(() => {
    db.all(`SELECT * FROM llm_order WHERE id=${id}`, (err, rows) => {
      if (rows.length == 0) {
        console.log("order does not exist");
        return;
      } else if (rows[0].is_taken == "1") {
        console.log("order already taken");
        return;
      } else {
        db.run(
          `UPDATE llm_order SET is_taken = "1" WHERE id = ${id};`,
          (err) => {
            if (err) {
              console.log(err);
              return;
            }
          }
        );
      }
    });
  });
};

//createOrder("Mongkok", "LokFu");
//listOrder();
//takeOrder(4);

module.exports = {
  db,
  createOrder,
  listOrder,
  takeOrder
}
