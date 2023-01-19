import "./Welcome.css"
import Angel from "../../Components/angel/Angel"

export default function Welcome() {
    return (
        <div className="Welcome">
            <div className="WelcomeTitle">
                <h2 className="WelcomeTitleClass">AGUSTIN</h2>
                <h2 className="WelcomeTitleClass">OCHOA</h2>
            </div>
            <div className="WelcomeInformation">
                <Angel />
            </div>
        </div>
    )
}