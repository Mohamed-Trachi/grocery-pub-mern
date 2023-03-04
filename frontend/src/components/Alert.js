import { useEffect } from "react";
import { useGlobalContext } from "./context";
const Alert = ({ type, msg }) => {
	const { list, showAlert } = useGlobalContext();

	useEffect(() => {
		const timeout = setTimeout(() => {
			showAlert();
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, [list]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};
export default Alert;
