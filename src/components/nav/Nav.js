import { Link, animateScroll as scroll } from "react-scroll";
import "./Nav.css"

export default function Nav() {

    return (
        <header>
            <div className="HeaderName">
                <h3 className="by">by </h3>
                <h3 className="Name">AGUH OCHOA</h3>
            </div>
            <nav>
                <ul className="navContainer">
                    <li className="navLink">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                    </li>
                    <li className="navLink">
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Works
                        </Link></li>
                    <li className="navLink">Contact</li>
                </ul>
            </nav>
        </header>
    )
}