import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Footer from "./Footer";
import {useState} from "react";

const database = JSON.parse(localStorage.getItem("items")) || [
	{
		id: 1,
		name: "Learn React",
		checked: true
	},
	{
		id: 2,
		name: "Create a simple App",
		checked: true
	},
	{
		id: 3,
		name: "Rule the world",
		checked: false
	}
];
let i = database.map(item => item.id).reduce((a, b) => Math.max(a, b), 0);

function App() {
	const [items, _setItems] = useState(database);
	const setItems = (args) => {
		_setItems(args);
		localStorage.setItem("items", JSON.stringify(args));
	};
	const addItem = () => setItems([...items, {id: ++i, name: "", checked: false}]);
	const setItem = (id, name) => setItems(items.map(item => item.id === id ? {...item, name: name} : item));
	const checkItem = (id, checked) => setItems(items.map(item => item.id === id ? {...item, checked: checked} : item));
	const deleteItem = id => setItems(items.filter(item => item.id !== id));
	const checkAll = checked => setItems(items.map(item => ({...item, checked: checked})));
	return <div className="app">
		<div className="container">
			<Header items={items} setItems={setItems} checkAll={checkAll} />
			<ItemsList items={items} addItem={addItem} setItem={setItem} checkItem={checkItem} deleteItem={deleteItem} />
			<Footer />
		</div>
	</div>;
}

export default App;
