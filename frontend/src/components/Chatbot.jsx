import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/chatbot.css";

function Chatbot() {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const sendMessage = async () => {

        if (!message.trim() || loading) return;

        const userMessage = message;

        // show user message instantly
        setChat((prev) => [
            ...prev,
            {
                user: userMessage,
                bot: "Typing..."
            }
        ]);

        setMessage("");
        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost:8080/chatbot/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: userMessage
                    })
                }
            );

            const data = await response.json();

            setChat((prev) => {

                const updatedChat = [...prev];

                updatedChat[updatedChat.length - 1] = {
                    user: userMessage,
                    bot: data.answer || "No response"
                };

                return updatedChat;
            });

        } catch (err) {

            console.log(err);

            setChat((prev) => {

                const updatedChat = [...prev];

                updatedChat[updatedChat.length - 1] = {
                    user: userMessage,
                    bot: "Server Error"
                };

                return updatedChat;
            });

        } finally {
            setLoading(false);
        }
    };

    const fallbackMessage =
        "Sorry, I am not able to answer your query. Please fill the enquiry form. Our team will definitely connect you within 24 hours.";

    return (

        <div className="chat-container">

            <h2 className="chat-title">
                Campus Connect Chatbot
            </h2>

            <div className="chat-box">

                {chat.map((msg, index) => (

                    <div
                        key={index}
                        className="chat-message-wrapper"
                    >

                        <div className="user-message">
                            <b>You:</b> {msg.user}
                        </div>

                        <div className="bot-message">
                            <b>Bot:</b> {msg.bot}

                            {/* Show enquiry link if fallback message appears */}
                            {msg.bot.includes("enquiry form") && (
                                <div style={{ marginTop: "8px" }}>
                                    <span
                                        onClick={() =>
                                            navigate("/mycollege/enquary")
                                        }
                                        style={{
                                            color: "blue",
                                            textDecoration: "underline",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Fill Form
                                    </span>
                                </div>
                            )}

                        </div>

                    </div>
                ))}

            </div>

            <div className="input-area">

                <input
                    type="text"
                    className="chat-input"
                    placeholder="Ask something..."
                    value={message}
                    disabled={loading}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !loading) {
                            sendMessage();
                        }
                    }}
                />

                <button
                    className="send-btn"
                    onClick={sendMessage}
                    disabled={loading}
                >
                    {loading ? "Please Wait..." : "Send"}
                </button>

            </div>

        </div>
    );
}

export default Chatbot;