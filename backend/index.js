require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const fnc = (req, res) => {
	res.send("hello");
};
const notFound = (req, res) => {
	res.status(400).json({ msg: "Route Not Found" });
};
app.use(cors());
app.get("/", fnc);
app.use(notFound);
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
