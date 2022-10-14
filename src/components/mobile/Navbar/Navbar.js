import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return(
        <nav className="navbar text-primary-content">
            <section className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" style={{color: 'white', fontSize: '1.6em', fontWeight: '800'}}
                    to="/">NT Group
                </Link>
            </section>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-square btn-ghost"  style={{color: 'white'}}>
                    <svg className="inline-block w-5 h-5 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
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