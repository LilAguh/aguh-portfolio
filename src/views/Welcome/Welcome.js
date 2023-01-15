import "./Welcome.css"
import Angel from "../../Components/angel/Angel"

export default function Welcome() {
    return (
        <div className="About">
            <div className="AboutTitle">
                <h2 className="AboutTitleClass">AGUSTIN</h2>
                <h2 className="AboutTitleClass">OCHOA</h2>
            </div>
            <div className="AboutInformation">
                <Angel />
            </div>
        </div>
    )
}