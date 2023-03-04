const mongoose = require("mongoose");
const GroceryItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "must provide title"],
		trim: true,
		maxlength: [20, "name can not be more than 20 characters"],
	},
});
module.exports = mongoose.model("Grocery-Item", GroceryItemSchema);
