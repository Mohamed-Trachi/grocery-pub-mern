import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const getLocalStorage = () => {
		let list = localStorage.getItem("list");
		if (list) return JSON.parse(list);
		else return [];
	};
	const [list, setList] = useState(getLocalStorage());
	const [name, setName] = useState("");
	const [editID, setEditID] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const removeItem = (id) => {
		showAlert(true, "danger", "item removed");
		const newList = list.filter((item) => {
			return item.id !== id;
		});
		setList(newList);
	};
	const editItem = (id) => {
		const targetItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(targetItem.title);
	};
	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
	};
	return (
		<AppContext.Provider
			value={{
				getLocalStorage,
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
