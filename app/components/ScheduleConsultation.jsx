'use client';

import React from 'react';
import Link from 'next/link';
import { BsStars } from 'react-icons/bs';

export default function ScheduleConsultation() {
  return (
    <section className="bg-[#1e4145] text-[#d1ecf1] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Section: Heading */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-[36px] leading-[40px]" style={{color:'rgb(181,219,223)'}}>
            Schedule A <br className="hidden md:block" /> Consultation
          </h2>
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left">
          <p className="font-bold text-[18px] leading-[28px] text-center" style={{color:'rgb(181,219,223)'}}>
            Dr. Serena Blake is currently accepting new clients. <br />
            Available for online and in-person sessions.
          </p>
        </div>

        {/* Right: Button */}
        <Link href="/contact">
        
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#d1ecf1] text-[#d1ecf1] rounded-md hover:bg-[#f5f7fa] hover:text-[#1e4145] transition font-semibold text-[18px] leading-[28px] cursor-pointer">
            <BsStars className="w-5 h-5" />
            Start Healing
          </button>
        
        </Link>
      </div>
    </section>
  );
}
