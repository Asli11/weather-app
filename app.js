const path = require("path");
const express = require("express");
const router = require("./router");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
app.set("views", "views");
app.set("view engine", "hbs");

// app.get("/about", (req, res) => {
// 	res.sendFile("about.html", {
// 		root: path.join(__dirname, "../public"),
// 	});

// });

app.listen(port, console.log(`listening on ${port}`));
