import MenuItem from "../MenuItem/menu-item"
import "./menu.css"

function Menu() {
    return (
    <header className="menu-wrapper">
        <nav>
        <ul className="menu">
            <MenuItem
                text="Home"
                link="/"
            />
            <MenuItem
                text="Characters"
                link="/characters"
            />
            <MenuItem
                text="Episodes"
                link="/episodes"
            />
            <MenuItem
                text="Quotes"
                link="/quotes"
            />
        </ul>
        </nav>
    </header>)
}

export default Menu