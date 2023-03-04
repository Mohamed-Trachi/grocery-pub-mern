require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const router = require("./routes/grocery.router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);
app.use(notFound);
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
