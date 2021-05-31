var sqlite3 = require("sqlite3").verbose();
var path = require("path");
var dbname = "llmdatabase.db";
var table = "llm_order";
let db = new sqlite3.Database(path.join(__dirname, dbname), (err) => {
  if (err) {
    console.log("Error code " + err.errno + ": " + err.message);
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
