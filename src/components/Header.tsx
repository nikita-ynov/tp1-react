import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/userList">Utilisateurs</Link></li>
            </ul>
            <Link to={"/login"}>Log in</Link>
        </nav>
        </header>
    )
}

export default Header;