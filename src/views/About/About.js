import "./About.css"

export default function About() {
    return (
        <div className="About" id="about">
            <div className="AboutTitle">
                {/* <h2 className="AboutTitleClass">AGUSTIN</h2>
                <h2 className="AboutTitleClass">OCHOA</h2> */}
            </div>
            <div className="AboutInformation">
                {/* <Angel /> */}
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