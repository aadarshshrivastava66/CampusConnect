import Hero from "../components/Hero"
import { useNavigate } from "react-router-dom"
import { FaRobot } from "react-icons/fa"

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Hero />
        </>
    )
}

export default HomePage