import "./style.scss"
import React, { useState } from "react";

export default function Qidiruv() {
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedMessage(message);
    };
    return (
        <>
            <div className="colorContainer dark:shadow-none shadow-[2px_2px_15px_lightgrey] hover:border-[blue] border-1 dark:border-none">
                <form onSubmit={handleSubmit} className="messageForm">
                    <input
                        type="search"
                        value={message}
                        onChange={handleChange}
                        placeholder="Sohani yozing"
                        className="messageInput"
                    />
                    {message.trim() && (
                        <button
                            type="submit"
                            className="sendButton"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    )}
                </form>
            </div>
        </>
    )
}