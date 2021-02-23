import "../styles/Item.css";
import {FaCheckCircle, FaRegCircle, FaRegTrashAlt} from "react-icons/fa";

function Item({name, deleteItem, setName, checked, setChecked}) {
	return <h3 className={"item" + (checked ? " item-completed" : "")}>
		<span className="item-checkbox align-text-top" onClick={() => setChecked(!checked)}>
			{checked ? <FaCheckCircle className="align-bottom" /> : <FaRegCircle className="align-bottom" />}
		</span>
		<input className="item-title" value={name} onChange={e => setName(e.target.value)} placeholder="Item content..." />
		<span className="item-delete align-text-top" onClick={deleteItem}>
			<FaRegTrashAlt className="align-bottom" />
		</span>
	</h3>;
}

export default Item;
