import { useEffect } from "react";
import Alert from "./components/Alert";
import List from "./components/List";
import { useGlobalContext } from "./components/context";
const App = () => {
	const {
		url,
		name,
		setName,
		editID,
		setEditID,
		isEditing,
		setIsEditing,
		alert,
		showAlert,
		clearList,
		getData,
	} = useGlobalContext();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, "warning", "please enter value");
		} else if (name && isEditing) {
			fetch(url + "/" + editID, {
				method: "PATCH",
				body: JSON.stringify({
					title: name,
				}),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}).then(() => {
				setName("");
				setEditID(null);
				setIsEditing(false);
				showAlert(true, "success", "value edited");
				getData();
			});
		} else {
			showAlert(true, "success", "new item added");
			fetch(url, {
				method: "POST",
				body: JSON.stringify({
					title: name,
				}),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}).then(() => getData());
			setName("");
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<main>
			<form className="container">
				{alert.show && <Alert {...alert} />}
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
				<List />
				<button className="clear-btn" type="button" onClick={clearList}>
					Clear List
				</button>
			</form>
		</main>
	);
};
export default App;
