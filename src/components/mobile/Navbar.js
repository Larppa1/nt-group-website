import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar bg-primary text-primary-content">
            <section className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl"
                    to="/">NT Group
                </Link>
            </section>
            <section className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg className="inline-block w-5 h-5 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </section>
        </nav>
    )
}