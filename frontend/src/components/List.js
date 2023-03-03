import Item from "./Item";
const List = ({ items, removeItem, editItem }) => {
	return (
		<ul className="grocery-list">
			{items.map((item) => {
				const { id, title } = item;
				return <Item key={id} {...{ id, title, removeItem, editItem }} />;
			})}
		</ul>
	);
};
export default List;
