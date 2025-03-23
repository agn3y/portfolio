import React, { useState, useEffect, useRef } from 'react';

export default function EmblaCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("right");
    const intervalRef = useRef(null);

    const slides = [
        { title: "Welcome to Slide 1", description: "This is the first slide." },
        { title: "Discover Slide 2", description: "Here is some information about slide 2." },
        { title: "Explore Slide 3", description: "Slide 3 has something interesting to share." },
        { title: "Enjoy Slide 4", description: "Experience the joy of slide 4." },
        { title: "Final Slide 5", description: "Wrapping up with slide 5." },
    ];

    const nextSlide = () => {
        setDirection("right");
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [currentSlide]);

    const startAutoSlide = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(nextSlide, 3500); // Consistent timing for all slides
        }
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div
            className="relative w-full bg-cover bg-center bg-contain"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop')",
                backgroundColor: "#242424",
                backgroundBlendMode: "multiply"
            }}
        >
            <div
                className="relative h-56 overflow-hidden rounded-lg md:h-96"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
            >
                <div
                    key={currentSlide}
                    className={`flex items-center justify-center h-full transition-all duration-1000 ease-in-out
                    ${direction === "right" ? "animate-slide-right-slow" : "animate-slide-left-slow"}`}
                >
                    <div className="flex-col text-center">
                        <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
                        <p className="text-lg mt-2">{slides[currentSlide].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
