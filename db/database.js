var sqlite3 = require("sqlite3").verbose();
var path = require("path");
var dbname = "llmdatabase.db";
var table = "llm_order";
let db = new sqlite3.Database(path.join(__dirname, dbname), (err) => {
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
});

//createOrder("Mongkok", "LokFu");
//listOrder();
//takeOrder(4);

module.exports = {
  db,
  table,
};
