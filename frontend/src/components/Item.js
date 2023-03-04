import { FaEdit, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Item = ({ _id, title }) => {
	const { editItem, removeItem } = useGlobalContext();
	return (
		<li className="grocery-item">
			<span className="grocery-text">{title}</span>
			<div className="btn-group">
				<button className="edit" onClick={() => editItem(_id)} type="button">
					<FaEdit />
				</button>
				<button
					className="delete"
					onClick={() => removeItem(_id)}
					type="button"
				>
					<FaTrash />
				</button>
			</div>
		</li>
	);
};
export default Item;
