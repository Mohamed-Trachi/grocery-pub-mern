import Item from "./Item";
import { useGlobalContext } from "./context";

const List = () => {
	const { list } = useGlobalContext();
	return (
		<ul className="grocery-list">
			{list.map((item) => {
				const { id, title } = item;
				return <Item key={id} {...{ id, title }} />;
			})}
		</ul>
	);
};
export default List;
