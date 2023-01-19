import "./AngelTRacker.css"
import Angel2 from "../../assets/images/angel2.png"
import AngelArm from "../../assets/images/AngelArm2.png"
import { useState, useRef } from "react";

export default function AngelTracker() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [armAngle, setArmAngle] = useState(0);
    const containerRef = useRef(null);
    const armRef = useRef(null);
    const limit = 45 * (Math.PI / 180);

    const handleMouseMove = (event) => {
        if (isMouseInside) {
            const container = containerRef.current.getBoundingClientRect();
            const arm = armRef.current;

            // calculate angle between arm and cursor
            const angle = Math.atan2(event.clientY - container.top - container.height / 2, event.clientX - container.left - container.width / 2);

            // apply rotation to arm
            if (angle > 0 && angle < limit) {
                arm.style.transform = `rotate(${angle}rad)`;
                setArmAngle(angle);
            } else {
                arm.style.transform = `rotate(0rad)`;
                setArmAngle(0);
            }

            setX(event.clientX);
            setY(event.clientY);
        }
    }

    const handleMouseEnter = () => {
        setIsMouseInside(true);
    }

    const handleMouseLeave = () => {
        setIsMouseInside(false);
        setArmAngle(0);
    }


    return (
        <div className="TrackerZone" onMouseLeave={handleMouseLeave}>
            <div className="Tracker"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}>
                <img src={Angel2} />
                <img src={AngelArm} className="Arm" onMouseMove={handleMouseMove} ref={armRef}
                    style={{
                        transform: `rotate(${armAngle}rad)`
                    }}
                />
            </div>
        </div>
    )
}