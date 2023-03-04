const Grocery = require("../models/grocery-item");
const asyncWrapper = require("../middleware/async-wrapper");
const getAll = asyncWrapper(async (req, res) => {
	const groceryItems = await Grocery.find({});
	res.status(200).json({
		msg: "grocery pud",
		dataLength: groceryItems.length,
		groceryItems,
	});
});
const clearList = asyncWrapper(async (req, res) => {
	const groceryItems = await Grocery.deleteMany({});
	res.status(200).json({
		msg: "grocery pud",
		dataLength: groceryItems.length,
		groceryItems,
	});
});
const createItem = asyncWrapper(async (req, res) => {
	const item = await Grocery.create(req.body);
	res.status(200).json({ msg: "created", item });
});
const getOne = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const item = await Grocery.findOne({ _id: id });
	res.status(200).json({ msg: "single item", item });
});
const updateItem = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	const item = await Grocery.findOneAndUpdate({ _id: id }, { title });
	res.status(200).json({ msg: "single item", item });
});
const deleteItem = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const item = await Grocery.findOneAndRemove({ _id: id });
	res.status(200).json({ msg: "single item", item });
});
module.exports = {
	getAll,
	clearList,
	createItem,
	getOne,
	updateItem,
	deleteItem,
};
