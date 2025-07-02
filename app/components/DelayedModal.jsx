'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function AutoCloseModal() {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 43000);

    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={modalRef}
       className="bg-white rounded-lg p-6 w-full max-w-[600px] shadow-xl relative"

      >
        

        {/* Heading */}
        <h2 className="text-center text-[24px] sm:text-[28px] font-bold leading-tight text-[#1e4145] mb-6">
          Ready to Start Your <br /> Healing Journey?
        </h2>

        {/* Main Image + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-[#1e4145] mb-4">
          <Image
            src="/sb1.jpg"
            alt="Dr. Serena Blake"
            width={150}
            height={180}
            className="rounded object-cover"
          />
          <p className="text-[20px] leading-[28px] text-center sm:text-left">
            With 8 years’ experience, she provides caring, effective therapy for anxiety,
            trauma, and relationships—online or in person.
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#1e4145] mb-6">
          <span>⭐ Top Rated</span>
          <span>8+ Years Experience</span>
          <span>500+ Sessions</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 text-[#1e4145]"
          >
            Close
          </button>
          <a
            href="/contact"
            className="flex-1 bg-[#1e4145] text-white py-2 rounded text-center hover:bg-[#163535]"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
