import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const userdata = [];  

const { Pool } = pg
 
const db = new Pool({
  host: "dpg-ctpn2j23esus73djc000-a",
  user: "sk",
  database: "nas_test",
  password: "ryQZhP2RwMTx4Wk8hvNAPAlSPwzmn0l2",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 300000,
  connectionTimeoutMillis: 200000,
  ssl: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    userdata[0] = req.body.client;
    userdata[1] = req.body.lpo_date;
    userdata[2] = req.body.lpo_ref;

    db.query("INSERT INTO lpo_list (client, lpo_date, lpo_ref) VALUES ($1, $2, $3)", [userdata[0], userdata[1], userdata[2],]);
    res.redirect("/");
});

app.post("/add", (req, res) => {
    userdata[0] = req.body.client;
    userdata[1] = req.body.lpo_date;
    userdata[2] = req.body.lpo_ref;

    db.query("INSERT INTO lpo_list (client, lpo_date, lpo_ref) VALUES ($1, $2, $3)", [userdata[0], userdata[1], userdata[2],]);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on render on port ${port}`);
});
















