import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Footer from "./Footer";
import {useState} from "react";

const _items = JSON.parse(localStorage.getItem("items")) || [
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
let i = _items.map(item => item.id).reduce((a, b) => Math.max(a, b), 0);
const _appName = localStorage.getItem("appName") || "React Learning";
document.title = `${_appName} - React TODO App`;

function App() {
	const [items, _setItems] = useState(_items);
	const setItems = (newItems) => {
		_setItems(newItems);
		localStorage.setItem("items", JSON.stringify(newItems));
	};
	const addItem = () => setItems([...items, {id: ++i, name: "", checked: false}]);
	const setItem = (id, name) => setItems(items.map(item => item.id === id ? {...item, name: name} : item));
	const checkItem = (id, checked) => setItems(items.map(item => item.id === id ? {...item, checked: checked} : item));
	const deleteItem = id => setItems(items.filter(item => item.id !== id));
	const checkAll = checked => setItems(items.map(item => ({...item, checked: checked})));
	const [appName, _setAppName] = useState(_appName);
	const setAppName = (newAppName) => {
		_setAppName(newAppName);
		document.title = `${newAppName} - React TODO App`;
		localStorage.setItem("appName", newAppName);
	};
	return <div className="app">
		<div className="container">
			<Header setItems={setItems} checkAll={checkAll} appName={appName} setAppName={setAppName} />
			<ItemsList items={items} addItem={addItem} setItem={setItem} checkItem={checkItem} deleteItem={deleteItem} />
			<Footer />
		</div>
	</div>;
}

export default App;
