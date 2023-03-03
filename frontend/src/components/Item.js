import { FaEdit, FaTrash } from "react-icons/fa";
const Item = ({ id, title, editItem, removeItem }) => {
	return (
		<li className="grocery-item">
			<span className="grocery-text">{title}</span>
			<div className="btn-group">
				<button className="edit" onClick={() => editItem(id)} type="button">
					<FaEdit />
				</button>
				<button className="delete" onClick={() => removeItem(id)} type="button">
					<FaTrash />
				</button>
			</div>
		</li>
	);
};
export default Item;
