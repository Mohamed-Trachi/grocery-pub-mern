import Item from "./Item";
import { useGlobalContext } from "./context";

const List = () => {
	const { list } = useGlobalContext();
	return (
		<ul className="grocery-list">
			{list.map((item) => {
				const { _id, title } = item;
				return <Item key={_id} {...{ _id, title }} />;
			})}
		</ul>
	);
};
export default List;
