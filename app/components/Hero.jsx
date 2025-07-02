'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BsHeart, BsChatQuote, BsHeartPulse, BsStars } from 'react-icons/bs';

const Hero = () => {
    const SLIDER_ITEMS = [
        {
            text: "Greater Purpose In Your Life Direction.",
            icon: <BsChatQuote className="inline-block mr-2" size={22} />,
        },
        {
            text: "Greater Love in Your Relationships.",
            icon: <BsHeart className="inline-block mr-2" size={22} />,
        },
        {
            text: "Greater Peace in Your Heart.",
            icon: <BsHeartPulse className="inline-block mr-2" size={22} />,
        },
    ];

    const itemsWithClone = [...SLIDER_ITEMS, SLIDER_ITEMS[0]];

    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (index === SLIDER_ITEMS.length) {
            timeoutRef.current = setTimeout(() => {
                setTransition(false);
                setIndex(0);
            }, 700);
        } else {
            setTransition(true);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [index]);

    return (
        <section className="relative min-h-screen pt-[120px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">


            {/* Background Image */}
            <Image
                src="/2.png"
                alt="Background"
                fill
                className="absolute top-0 left-0 object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-5xl mb-5">
                {/* Heading */}
                <h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2.2rem] font-bold leading-snug tracking-tight"

                    style={{
                        fontWeight: 400,
                        fontSize: '35px',
                        lineHeight: '48px',
                        color: 'rgb(245, 247, 250)',
                    }}

                >
                    Empowering You Through Therapy to Heal, Grow, and<br className="hidden sm:block" /> Thrive
                </h1>

                {/* Paragraph */}
                <p className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#f4f6f9] max-w-2xl mx-auto font-semibold"
                    style={{
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(245, 247, 250)',
                    }}
                >
                    Start your path to emotional healing, stronger relationships, <br className="hidden sm:block" /> and lasting peace.
                </p>

                {/* Slider Heading */}
                <p className="mt-6 font-bold text-lg"
                    style={{
                        fontWeight: 800,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(245, 247, 250)',
                    }}
                >
                    I want to work with you for...
                </p>

                {/* Auto Slider */}
                <div className="h-10 overflow-hidden w-[320px] md:w-[400px] mb-6 mx-auto">
                    <div
                        className={`flex flex-col transition-transform duration-700 ease-in-out items-center`}
                        style={{
                            transform: `translateY(-${index * 2.5}rem)`,
                            transitionProperty: transition ? "transform" : "none",
                        }}
                    >
                        {itemsWithClone.map((item, i) => (
                            <div
                                key={i}
                                className="h-10 flex items-center justify-center gap-2 text-base md:text-lg text-[#b4dade]"

                            >
                                {React.cloneElement(item.icon, {
                                    className: "inline-block mr-2",
                                    color: "#b4dade",
                                })}
                                <span
                                    style={{
                                        fontWeight: 800,
                                        fontSize: '14px',
                                        lineHeight: '25px',
                                        color: 'rgb(245, 247, 250)',
                                    }}
                                >{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlights */}
                <div className="mt-2 text-sm flex flex-wrap justify-center gap-3 font-semibold font-poppins">
                    <span className="flex items-center gap-1"
                        style={{
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'rgb(245, 247, 250)',
                        }}
                    >⭐ Top Rated</span>
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: '12px',
                            lineHeight: '16px',
                            color: 'rgb(245, 247, 250)',
                            marginTop: '3px',
                        }}
                    >• 8+ Years Experience</span>
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: '12px',
                            lineHeight: '16px',
                            color: 'rgb(245, 247, 250)',
                            marginTop: '3px',
                        }}
                    >• 500+ Sessions</span>
                </div>

                {/* Button */}
                <Link href="/contact">
                    <button className="mt-6 px-12 py-2 bg-[#e0edfe] text-blue-600 font-semibold rounded-full shadow hover:scale-105 transition">
                        <span
                            className="flex items-center gap-2 cursor-pointer"
                            style={{
                                fontWeight: '500',
                                fontSize: '18px',
                                lineHeight: '28px',
                            }}
                        >
                            <BsStars size={20} />
                            Start Healing Today
                        </span>
                    </button>
                </Link>
            </div>
        </section >
    );
};

export default Hero;
