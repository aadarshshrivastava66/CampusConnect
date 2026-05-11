import Hero from "../components/Hero"
import { useNavigate } from "react-router-dom"
import { FaRobot } from "react-icons/fa"

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Hero />

            {/* Chatbot Floating Icon */}
            <div 
                onClick={() => navigate("/mycollege/chat")}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    padding: "15px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                title="Chat with us"
            >
                <FaRobot size={24} />
            </div>
        </>
    )
}

export default HomePage