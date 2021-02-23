import "../styles/Header.css";
import Menu from "./Menu";

function Header({setItems, checkAll}) {
	return <header className="header d-flex justify-content-center align-items-center position-relative">
		<Menu>
			<p onClick={() => setItems([])}>Clear list</p>
			<p onClick={() => checkAll(true)}>Check all</p>
			<p onClick={() => checkAll(false)}>Uncheck all</p>
		</Menu>
		<h1 className="header-title">React learning</h1>
	</header>;
}

export default Header;
