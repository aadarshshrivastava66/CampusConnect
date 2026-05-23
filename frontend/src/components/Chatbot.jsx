import { useState, useRef, useEffect } from "react";

import {
    FaArrowUp,
    FaComments,
    FaXmark
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

import "../css/chatbot.css";

function Chatbot() {

    const [message, setMessage] = useState("");

    const [chat, setChat] = useState([]);

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    // Latest Message Ref
    const latestMessageRef = useRef(null);

    // Auto Scroll To Latest Message
    useEffect(() => {

        latestMessageRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, [chat]);

    const sendMessage = async () => {

        if (!message.trim() || loading) return;

        const userMessage = message;

        // Add user message instantly
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

    return (

        <>

            {/* Floating Chat Button */}

            <button
                className="chatbot-toggle"
                onClick={() => setOpen(!open)}
            >

                {
                    open
                        ? <FaXmark />
                        : <FaComments />
                }

            </button>

            {/* Chat Window */}

            {
                open && (

                    <div className="chat-container">

                        <h2 className="chat-title">
                            Campus Connect
                        </h2>

                        <div className="chat-box">

                            {
                                chat.map((msg, index) => (

                                    <div
                                        key={index}
                                        className="chat-message-wrapper"
                                        ref={
                                            index === chat.length - 1
                                                ? latestMessageRef
                                                : null
                                        }
                                    >

                                        {/* User Message */}

                                        <div className="user-message">

                                            {msg.user}

                                        </div>

                                        {/* Bot Message */}

                                        <div className="bot-message">

                                            <b>Assistant:</b> {msg.bot}

                                            {
                                                msg.bot.includes("enquiry form") && (

                                                    <div
                                                        style={{
                                                            marginTop: "8px"
                                                        }}
                                                    >

                                                        <span
                                                            onClick={() =>
                                                                navigate("/mycollege/enquiry")
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
                                                )
                                            }

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                        {/* Input Area */}

                        <div className="input-area">

                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Ask anything..."
                                value={message}
                                disabled={loading}

                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }

                                onKeyDown={(e) => {

                                    if (
                                        e.key === "Enter" &&
                                        !loading
                                    ) {
                                        sendMessage();
                                    }
                                }}
                            />

                            <button
                                className="send-btn"
                                onClick={sendMessage}
                                disabled={loading}
                            >

                                <FaArrowUp />

                            </button>

                        </div>

                    </div>
                )
            }

        </>
    );
}

export default Chatbot;