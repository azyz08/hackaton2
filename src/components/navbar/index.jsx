import "./style.scss"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "../../pages/home"
import Univarsitet from "../../pages/unversitet"
import OquvMarkaz from "../../pages/oquvMarkaz"
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useMode from "../../ustils/zustand"
import React, { useEffect, useState } from "react"
import { Button, Drawer, Space } from 'antd';
import { useTranslation } from "react-i18next"
import '../../i18n.js';


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

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    return (
        <>
            <div className={`${darkMode ? "dark" : ""} `}>
                <nav className={`nav dark:bg-[#121212] navbar ${scrolled ? 'scrolled' : ''}`}>
                    <Link to={"/"}><img className="logo" src="/logo.png" alt="" /></Link>
                    <input type="checkbox" id="m" />
                    <ul>
                        <Link
                            to="/"
                            onClick={() => handleClick('/')}
                            className={activeLink === '/' ? 'active' : ''}
                        ><p>{t('home')}</p>
                            <span className={`underline ${activeLink === '/' ? 'active' : ''}`}></span>
                        </Link>
                        <Link
                            to="/universitet"
                            onClick={() => handleClick('/universitet')}
                            className={activeLink === '/universitet' ? 'active' : ''}
                        > <p>{t('universities')}</p>
                            <span className={`underline ${activeLink === '/universitet' ? 'active' : ''}`}></span>
                        </Link>
                        <Link
                            to="/oquv-markaz"
                            onClick={() => handleClick('/oquv-markaz')}
                            className={activeLink === '/oquv-markaz' ? 'active' : ''}
                        > <p>{t('studyCenters')}</p>
                            <span className={`underline ${activeLink === '/oquv-markaz' ? 'active' : ''}`}></span>
                        </Link>
                    </ul>
                    <div className="end flex items-center gap-4">
                        <select className="border-[1px] rounded-[5px] pt-[2px] pb-[2px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none" value={i18n.language} onChange={handleChange}>
                            <option value="uz">O'z</option>
                            <option value="ru">Рус</option>
                            <option value="en">Eng</option>
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
                    <Drawer className="duration-200 bg-white dark:bg-black"
                        title={`${size} Drawer`} placement="right" size={size} onClose={onClose} open={open}>
                        <ul>
                            <Link
                                to="/"
                                onClick={() => handleClick('/')}
                                className={activeLink === '/' ? 'active' : ''}
                            ><p>{t('home')}</p>
                                <span className={`underline ${activeLink === '/' ? 'active' : ''}`}></span>
                            </Link>
                            <Link
                                to="/universitet"
                                onClick={() => handleClick('/universitet')}
                                className={activeLink === '/universitet' ? 'active' : ''}
                            > <p>{t('universities')}</p>
                                <span className={`underline ${activeLink === '/universitet' ? 'active' : ''}`}></span>
                            </Link>
                            <Link
                                to="/oquv-markaz"
                                onClick={() => handleClick('/oquv-markaz')}
                                className={activeLink === '/oquv-markaz' ? 'active' : ''}
                            > <p>{t('studyCenters')}</p>
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