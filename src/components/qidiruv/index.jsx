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
            <div className="colorContainer ">
                <form onSubmit={handleSubmit} className="messageForm">
                    <label className="w-[100%]" htmlFor="c">
                        <input
                            type="search"
                            value={message}
                            onChange={handleChange}
                            placeholder="Sohani yozing"
                            className="messageInput"
                        />
                    </label>
                    {message.trim() && (
                        <button
                            type="submit"
                            className="sendButton">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    )}
                </form>
            </div>
        </>
    )
}