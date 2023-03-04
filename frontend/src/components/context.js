import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const url = "http://localhost:5000/api/v1/grocery";
	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		const list = data.groceryItems;
		await setList(list);
		return list;
	};
	const [list, setList] = useState([]);
	const [name, setName] = useState("");
	const [editID, setEditID] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const removeItem = (id) => {
		fetch(url + "/" + id, { method: "DELETE" })
			.then((res) => {
				return res.json();
			})
			.then(() => {
				getData();
				showAlert(true, "danger", "item removed");
			});
	};
	const editItem = (id) => {
		fetch(url + "/" + id)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setIsEditing(true);
				setEditID(id);
				setName(data.item.title);
			});
	};
	const clearList = () => {
		fetch(url, { method: "DELETE" }).then(() => {
			getData();
			showAlert(true, "danger", "empty list");
		});
	};
	return (
		<AppContext.Provider
			value={{
				url,
				list,
				setList,
				name,
				setName,
				alert,
				setAlert,
				editID,
				setEditID,
				isEditing,
				showAlert,
				setIsEditing,
				editItem,
				removeItem,
				clearList,
				getData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
