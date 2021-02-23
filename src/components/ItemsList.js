import "../styles/ItemsList.css";
import Item from "./Item";
import {FaPlus} from "react-icons/fa";

function ItemsList({items, addItem, setItem, checkItem, deleteItem}) {
	let content;
	if (items.length)
		content = items.map(item => <Item
				key={item.id}
				name={item.name}
				deleteItem={() => deleteItem(item.id)}
				setName={name => setItem(item.id, name)}
				checked={item.checked}
				setChecked={checked => checkItem(item.id, checked)}
		/>);
	else
		content = <p className="items-empty text-center">Click on "Add item" to create a new item!</p>;
	return <div className="items-list position-relative">
		{content}
		<div className="item-add position-absolute" onClick={addItem}>
			<FaPlus className="pr-2" />
			Add item
		</div>
	</div>;
}

export default ItemsList;
