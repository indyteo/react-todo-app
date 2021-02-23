import "../styles/Header.css";
import {FaGithub} from 'react-icons/fa';
import Menu from "./Menu";

function Header({setItems, checkAll, appName, setAppName}) {
	return <header className="header d-flex justify-content-center align-items-center position-relative">
		<Menu>
			<p onClick={() => setItems([])}>Clear list</p>
			<p onClick={() => checkAll(true)}>Check all</p>
			<p onClick={() => checkAll(false)}>Uncheck all</p>
		</Menu>
		<input className="header-title" value={appName} onChange={e => setAppName(e.target.value)} size={appName.length + 1} />
		<a className="git-icon" href="https://github.com/indyteo/react-todo-app" target="_blank" rel="noreferrer"><FaGithub size="2em" /></a>
	</header>;
}

export default Header;
