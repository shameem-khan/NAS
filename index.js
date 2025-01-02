import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();


// const db = new pg.client({
//     connectionString: process.env.DBConfigLink,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });
// module.exports = itemsPool;

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const userdata = [];  

const db = new pg.Client({
    user: "sk",
    host: "dpg-ctpn2j23esus73djc000-a.singapore-postgres.render.com",
    database: "nas_test",
    password: "ryQZhP2RwMTx4Wk8hvNAPAlSPwzmn0l2",
    port: 5432,
    ssl: "true",
    connectionString: "postgresql://sk:ryQZhP2RwMTx4Wk8hvNAPAlSPwzmn0l2@dpg-ctpn2j23esus73djc000-a.singapore-postgres.render.com/nas_test"
});
db.connect();


// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "NAS_master",
//     password: "postgres123",
//     port: 5432
// });
// db.connect();

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

db.end();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
















