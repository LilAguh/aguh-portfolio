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
                    <li className="navLink">About</li>
                    <li className="navLink">Works</li>
                    <li className="navLink">Contact</li>
                </ul>
            </nav>
        </header>
    )
}