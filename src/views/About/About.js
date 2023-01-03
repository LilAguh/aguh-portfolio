import "./About.css"

export default function About({ title, subtitle, dark, id }) {
    return (
        <div className="About">
            <div className="AboutTitle">
                <h2 className="AboutTitleClass">FRONTEND</h2>
                <h2 className="AboutTitleClass">DEVELOPER</h2>
            </div>
            <div className="AboutInformation">
                <p className="AboutInformationText">
                    Hi, I'm agustin ochoa, aguh, mern fullstack developer.
                    Graduated from the Mindhub bootcamp in 2022, I like the frontend and the design, wanting to specialize in mobile applications.
                </p>
                <p className="AboutInformationText">
                    Argentinian and food lover
                </p>
            </div>
        </div>
    )
}