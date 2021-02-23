import "../styles/Menu.css";
import {FaBars} from 'react-icons/fa';
import {useState} from "react";

function Menu({children}) {
	const [menuShown, setMenuShown] = useState(false);
	return <div className="menu" tabIndex="0" onBlur={() => setMenuShown(false)}>
		<FaBars className="menu-icon" size="2.5em" onClick={() => setMenuShown(!menuShown)} />
		{menuShown && <div className="menu-dropdown">{children}</div>}
	</div>;
}

export default Menu;
