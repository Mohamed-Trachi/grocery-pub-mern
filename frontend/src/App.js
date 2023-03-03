import { useEffect } from "react";
import Alert from "./components/Alert";
import List from "./components/List";
import { useGlobalContext } from "./components/context";
/* const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) return JSON.parse(localStorage.getItem("list"));
	else return [];
}; */
const App = () => {
	const {
		list,
		setList,
		name,
		setName,
		editID,
		setEditID,
		isEditing,
		setIsEditing,
		alert,
		showAlert,
		editItem,
		removeItem,
		clearList,
	} = useGlobalContext();
	//const [list, setList] = useState(getLocalStorage());
	//const [name, setName] = useState("");
	//const [editID, setEditID] = useState(null);
	//const [isEditing, setIsEditing] = useState(false);
	//const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	/* const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	}; */
	/* const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
	}; */
	/* const removeItem = (id) => {
		showAlert(true, "danger", "item removed");
		const newList = list.filter((item) => {
			return item.id !== id;
		});
		setList(newList);
	}; */
	/* const editItem = (id) => {
		const targetItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(targetItem.title);
	}; */
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, "warning", "please enter value");
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName("");
			setEditID(null);
			setIsEditing(false);
			showAlert(true, "success", "value edited");
		} else {
			showAlert(true, "success", "new item added");
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName("");
		}
	};
	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);
	return (
		<main>
			<form className="container">
				{alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
				<div className="title">Grocery Bud</div>
				<div className="underline"></div>
				<div className="input">
					<input
						type="text"
						placeholder="Example: Eggs"
						name="grocery-input"
						id="grocery-input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="submit" onClick={handleSubmit}>
						submit
					</button>
				</div>
				<List items={list} removeItem={removeItem} editItem={editItem} />
				<button className="clear-btn" type="button" onClick={clearList}>
					Clear List
				</button>
			</form>
		</main>
	);
};
export default App;
