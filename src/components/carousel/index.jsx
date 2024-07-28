import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slides, setSlides] = useState(['https://t3.ftcdn.net/jpg/03/05/75/20/360_F_305752084_bbbBpiR3hbe2wRoxqQwey3eXzgdPbT83.jpg', 'https://as1.ftcdn.net/v2/jpg/00/71/29/44/1000_F_71294485_Pl9RUYGlzpVCxMgce7fM0hSTyNh2HN6X.jpg', 'https://www.jbs.cam.ac.uk/wp-content/uploads/2020/08/csm-2019-ccsi-cambridgesocialinnovationprize-883x432-fd6c3aba3c-1024x501.jpg', 'https://png.pngtree.com/png-clipart/20190121/ourmid/pngtree-2018-football-world-cup-world-cup-png-image_518165.jpg']); const slideInterval = useRef(null);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval.current);
    }, []);

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 500); // Animatsiya vaqtini kutish
            return () => clearTimeout(timer);
        }
    }, [currentSlide, isTransitioning]);

    return (
        <>
            <div className="caro sm:w-screen md:w-[auto]">
                <div className="car">
                    <div className="carousel-wrapper ">
                        <div className="carousel">
                            <div className="carousel__inner">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`carousel__item ${index === currentSlide ? 'carousel__item--active' : ''}`}
                                    >
                                        <img src={slide} alt={`Slide ${index}`} className="carousel__image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="carousel__controls">
                            <div className="str">
                                <button className="carousel__button carousel__button--left" onClick={prevSlide}>
                                    &#10094;
                                </button>
                                <button className="carousel__button carousel__button--right" onClick={nextSlide}>
                                    &#10095;
                                </button>
                            </div>
                            <div className="carousel__indicators">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`carousel__indicator ${index === currentSlide ? 'carousel__indicator--active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;