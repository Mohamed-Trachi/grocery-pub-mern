const notFound = (req, res) => {
	res.status(400).json({ msg: "Route Not Found" });
};
module.exports = notFound;
