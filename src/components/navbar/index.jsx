import "./style.scss"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "../../pages/home"
import Univarsitet from "../../pages/unversitet"
import OquvMarkaz from "../../pages/oquvMarkaz"
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useMode from "../../ustils/zustand"
import React, { useEffect, useState } from "react"
import { Button, Drawer, Space } from 'antd';


export default function Navbar() {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const { darkMode, toggleDarkMode } = useMode();

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={`${darkMode ? "dark" : ""} `}>
                <nav className={`nav dark:bg-[#121212] navbar ${scrolled ? 'scrolled' : ''}`}>
                    <h1>Logo</h1>
                    <input type="checkbox" id="m" />
                    <ul>
                        <Link
                            to="/"
                            onClick={() => handleClick('/')}
                            className={activeLink === '/' ? 'active' : ''}
                        ><p>Home</p>
                            <span className={`underline ${activeLink === '/' ? 'active' : ''}`}></span>
                        </Link>
                        <Link
                            to="/universitet"
                            onClick={() => handleClick('/universitet')}
                            className={activeLink === '/universitet' ? 'active' : ''}
                        > <p>Universitetlar</p>
                            <span className={`underline ${activeLink === '/universitet' ? 'active' : ''}`}></span>
                        </Link>
                        <Link
                            to="/oquv-markaz"
                            onClick={() => handleClick('/oquv-markaz')}
                            className={activeLink === '/oquv-markaz' ? 'active' : ''}
                        > <p>O'quv markazlar</p>
                            <span className={`underline ${activeLink === '/oquv-markaz' ? 'active' : ''}`}></span>
                        </Link>
                    </ul>
                    <div className="end flex items-center gap-4">
                        <select className="border-[1px] rounded-[5px] pt-[2px] pb-[2px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none">
                            <option>O'z</option>
                            <option>Рус</option>
                            <option>Eng</option>
                        </select>
                        <DarkModeSwitch
                            className="text-[#FFA500] dark:text-white"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            size={25}
                        />
                        <label className="cursor-pointer text-[20px]" htmlFor="m"><i class="fa-solid fa-bars"></i></label>
                        <Space className="driver">
                            <Button type="primary" className="menu text-black dark:text-white duration-200" onClick={showDefaultDrawer}>
                                <i class="fa-solid fa-bars"></i>
                            </Button>
                        </Space>
                    </div>
                    <Drawer
                        title={`${size} Drawer`}
                        placement="right"
                        size={size}
                        onClose={onClose}
                        open={open}
                    >
                        <ul>
                            <Link
                                to="/"
                                onClick={() => handleClick('/')}
                                className={activeLink === '/' ? 'active' : ''}
                            ><p>Home</p>
                                <span className={`underline ${activeLink === '/' ? 'active' : ''}`}></span>
                            </Link>
                            <Link
                                to="/universitet"
                                onClick={() => handleClick('/universitet')}
                                className={activeLink === '/universitet' ? 'active' : ''}
                            > <p>Universitetlar</p>
                                <span className={`underline ${activeLink === '/universitet' ? 'active' : ''}`}></span>
                            </Link>
                            <Link
                                to="/oquv-markaz"
                                onClick={() => handleClick('/oquv-markaz')}
                                className={activeLink === '/oquv-markaz' ? 'active' : ''}
                            > <p>O'quv markazlar</p>
                                <span className={`underline ${activeLink === '/oquv-markaz' ? 'active' : ''}`}></span>
                            </Link>
                        </ul>
                    </Drawer>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/universitet" element={<Univarsitet />} />
                <Route path="/oquv-markaz" element={<OquvMarkaz />} />
            </Routes>
        </>
    )
}