const express = require("express");
const router = express.Router();

// const connection = require("../../config/database");
router.get("/", (req, res, next) => {
 const station= req.query.position;
 const val=req.query.val;
  // console.log(data)
  const mysql = require("mysql");
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "password",
  //   database: "ppug_debug",
  //   port: 3306,
  // });
  const connection = mysql.createConnection({
    host: "zr.airmode.live",
    user: "digitalman",
    password: "c1vG7R34",
    database: "tracker",
    port: 3306,
  });


  var today = new Date();
  function date() {
    var dd = today.getDate();
    // dd = dd - 1;
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    // console.log(today);
  }
  date();

  var ret = [];
  var dat = [];

  var q = `SELECT MIN(${val}) as min,MAX(${val}) as max, AVG(${val}) as avg,timestamp, HOUR(timestamp) AS hour, DATE_FORMAT(timestamp, "%d/%c/%y") AS date FROM ppug_data WHERE PID="${station}" && DATE_FORMAT(timestamp, "%e/%c/%Y")="${today}" GROUP BY hour,date ORDER BY hour;`;
  // var q = `SELECT MIN(do_val) as min,MAX(do_val) as max, AVG(do_val) as avg,timestamp, HOUR(timestamp) AS hour, DATE_FORMAT(timestamp, "%d/%c/%y") AS date FROM ppug_data WHERE PID="stationOne" && DATE_FORMAT(timestamp, "%e/%c/%Y")="${today}" GROUP BY hour,date ORDER BY hour;`;
  // console.log(data)
  connection.connect();
  connection.query(q, function (error, row, fields) {
    if (error) {
      console.log(error);
    }
    if (row) {
      for (var i = 0; i < row.length; i++) {
        if (row[i].hour < 10) {
          row[i].hour = "0" + row[i].hour;
        }
        dat.push({
          min: row[i].min.toFixed(2),
          max: row[i].max.toFixed(2),
          avg: row[i].avg.toFixed(2),
          timestamp: row[i].timestamp,
          hour: row[i].hour,
          date: row[i].date,
        });
      }
      // console.log(row);
    }

    ret = JSON.stringify(dat);
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send(ret);
  });
  connection.end();
});
module.exports = router;
