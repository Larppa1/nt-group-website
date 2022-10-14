import { Link } from "react-router-dom"

export default function DesktopNavbar() {
    return(
        <nav className="navbar text-primary-content">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" style={{color: 'white', fontSize: '2.5em', fontWeight: '800'}}
                    to="/">NT Group
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/uutiset">Uutiset</Link></li>
                    <li><Link to="/osakeanti">Osakeanti</Link></li>
                    <li><Link to="/tietoja">Tietoja</Link></li>
                    <li><Link to="/ota-yhteytta">Yhteystiedot</Link></li>
                </ul>
            </div>
        </nav>
    )
}