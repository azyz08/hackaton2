import React, { useState, useEffect, useRef } from 'react';

const ScrollSlider = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const sliderRef = useRef(null);
    const animationFrameId = useRef(null);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const totalScrollable = scrollHeight - clientHeight;
        const scrollProgress = (scrollTop / totalScrollable) * 100;

        setScrollPercentage(scrollProgress);
    };

    const animateSlider = () => {
        if (sliderRef.current) {
            const currentWidth = parseFloat(sliderRef.current.style.width || '0');
            const targetWidth = scrollPercentage;

            if (currentWidth < targetWidth) {
                sliderRef.current.style.width = `${Math.min(currentWidth + 2, targetWidth)}%`;
                animationFrameId.current = requestAnimationFrame(animateSlider);
            } else if (currentWidth > targetWidth) {
                sliderRef.current.style.width = `${Math.max(currentWidth - 2, targetWidth)}%`;
                animationFrameId.current = requestAnimationFrame(animateSlider);
            } else {
                cancelAnimationFrame(animationFrameId.current);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(animateSlider);
        return () => cancelAnimationFrame(animationFrameId.current);
    }, [scrollPercentage]);

    const sliderStyle = {
        height: '3px',
        width: '0%', // boshlang'ich kenglik 0% bo'ladi
        backgroundColor: '#00FF7F',
        position: 'fixed',
        top: 59,
        left: 0,
        zIndex: 1000,
        transition: 'none', // Transition ni o'chirib tashladik
    };

    return <div ref={sliderRef} style={sliderStyle} />;
};

export default ScrollSlider;
