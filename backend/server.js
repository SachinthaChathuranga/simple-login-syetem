const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const { resetWatchers } = require("nodemon/lib/monitor/watch");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myapp",
});

{
  /*app.post("/login", (req, res) => {
  const sql = "SELECT * from users where name = ? AND password = ?";
//   const values = [req.body.email, req.body.password];
  con.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Login Failed!");
    // return res.json(data);
    if(data.length > 0 ){
        return res.json('Login Successfully!')
    }else{
        return res.json('No Record!..')
    }
  });
});*/
}

app.post("/register", (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "select * from users where `email` = (?) OR `password` = (?) ";
  // const values = [
  //     req.body.email, req.body.password
  // ]

  con.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("is = " + err);
    }
    if (data.length > 0) {
      console.log(res);
      return res.json("Success");
    } else {
      return res.json("Faile");
    }
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});
