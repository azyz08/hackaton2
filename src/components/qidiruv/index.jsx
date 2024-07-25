import "./style.scss"
import React from "react";

export default function Qidiruv() {
    return (
        <>
            <form className="mt-2 qidiruv">
                <input className="border" placeholder="Nima qidirmoqchisiz" type="search" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    )
}