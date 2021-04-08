const path = require("path");
const express = require("express");
const router = require("./router");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
app.set("views", "views");
app.set("view engine", "hbs");

const PORT = 3000 || process.env.PORT;

// app.get("/about", (req, res) => {
// 	res.sendFile("about.html", {
// 		root: path.join(__dirname, "../public"),
// 	});

// });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
