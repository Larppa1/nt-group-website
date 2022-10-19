import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar(props) {
    useEffect(() => {
        const landingNav = document.getElementById('landingNav')
        props.page === 'landing' ? landingNav.style["backgroundColor"] = 'rgba(0, 0, 0, 0.4)' : landingNav.style["opacity"] = '1'
    }, [])

    if(window.innerWidth < 768) {
        return(
            <nav id="landingNav" className="navbar bg-neutral text-primary-content">
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
                        <li><Link to="/osakeanti">Osakeanti</Link></li>
                        <li><Link to="/uutiset">Uutiset</Link></li>
                        <li><Link to="/tietoja">Tietoja</Link></li>
                        <li><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }else {
        return(
            <nav  id="landingNav" className="navbar bg-neutral text-primary-content" style={{paddingBlock: '2vh'}}>
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" style={{color: 'white', fontSize: '2.5em', fontWeight: '800'}}
                    to="/">NT Group
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/osakeanti">Osakeanti</Link></li>
                    <li><Link to="/uutiset">Uutiset</Link></li>
                    <li><Link to="/tietoja">Tietoja</Link></li>
                    <li><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}