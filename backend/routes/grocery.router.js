const express = require("express");
const {
	getAll,
	clearList,
	createItem,
	getOne,
	updateItem,
	deleteItem,
} = require("../controllers/grocery.controller");
const router = express.Router();
router.route("/grocery").get(getAll).post(createItem).delete(clearList);
router.route("/grocery/:id").get(getOne).patch(updateItem).delete(deleteItem);
module.exports = router;
