import { Link, Route, Routes } from "react-router-dom"
import "./style.scss"
import Home from "../../pages/home"
import Univarsitet from "../../pages/unversitet"
import OquvMarkaz from "../../pages/oquvMarkaz"
export default function Navbar() {
    return (
        <>
            <div className="nav">
                <h1>Logo</h1>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/universitet"}><li>Universitetlar</li></Link>
                    <Link to={"/oquv-markaz"}><li>O'quv markazlar</li></Link>
                    <select className="border-[1px] rounded-sm border-[grey]">
                        <option>Uz</option>
                        <option>Ru</option>
                        <option>En</option>
                    </select>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/universitet" element={<Univarsitet />} />
                <Route path="/oquv-markaz" element={<OquvMarkaz />} />
            </Routes>
        </>
    )
}