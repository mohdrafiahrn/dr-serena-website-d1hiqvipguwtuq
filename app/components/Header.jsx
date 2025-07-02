'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BsTelephoneFill, BsGeoAltFill } from 'react-icons/bs';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAddressBar, setShowAddressBar] = useState(true);
  const pathname = usePathname();

  const isContactPage = pathname === '/contact';

  useEffect(() => {
    if (!isContactPage) {
      const handleScroll = () => {
        setShowAddressBar(window.scrollY < 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setShowAddressBar(true);
    }
  }, [isContactPage]);

  return (
    <>
      {/* Address Bar */}
      {/* <div
        className={`w-full ${isContactPage ? '' : 'fixed'
          } border-b border-gray-900 top-0 left-0 z-[60] bg-[#fff0ec] text-[#786667] text-sm px-4 sm:px-6 lg:px-[122px] py-2 shadow transition-transform duration-500 ease-in-out 
    ${showAddressBar && !isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex md:flex-nowrap justify-between items-center gap-2 sm:gap-0">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <BsTelephoneFill size={14} />
            (123) 456-7890
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <BsGeoAltFill size={14} />
            1287 Maplewood Drive, Los Angeles, CA 90026
          </span>
        </div>
      </div> */}

      <div
        className={`w-full ${isContactPage ? '' : 'fixed'
          } border-b border-transparent top-0 left-0 z-[60] bg-[#fff0ec] text-[#786667] text-sm px-4 sm:px-6 lg:px-[122px] py-2 shadow transition-transform duration-500 ease-in-out 
    ${showAddressBar && !isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-between items-center gap-2 sm:gap-0 w-full">
          {/* Phone */}
          <span className="flex items-center gap-2 whitespace-nowrap">
            <BsTelephoneFill size={14} />
            (123) 456-7890
          </span>

          {/* Address (truncated on small screens) */}
          <span className="flex items-center gap-1 justify-end overflow-hidden text-ellipsis whitespace-nowrap max-w-[55%] sm:max-w-none">
            <span className="flex-shrink-0">
              <BsGeoAltFill size={16} />
            </span>
            <span className="truncate">
              1287 Maplewood Drive, Los Angeles, CA 90026
            </span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`w-full ${isContactPage ? '' : 'fixed'
          } z-50 bg-[#f5f7fa] border-b border-[#e0e0e0] shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out ${showAddressBar && !isContactPage ? 'mt-[0] top-[0]' : 'top-0'
          }`}
      >
        <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[122px] flex flex-wrap md:flex-nowrap justify-between items-center py-3 gap-4 transition-all duration-300 ${showAddressBar && !isContactPage ? 'mt-10' : 'mt-0'}`}>

          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 leading-tight">
            <div className=''>
              <h1 className="text-xl sm:text-2xl font-bold text-[#3a93a1]">Dr. Serena Blake, PsyD</h1>
              <h2 className="text-sm sm:text-base text-[#3a93a1] font-semibold tracking-wide">
                Clinical Psychologist
              </h2>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-12 text-[#627b7e] font-normal">
            <Link href={isContactPage ? '/#about' : '#about'} className="hover:bg-white px-4 py-2 rounded-md transition">
              About
            </Link>
            <Link href={isContactPage ? '/#services' : '#services'} className="hover:bg-white px-4 py-2 rounded-md transition">
              Services
            </Link>
            <Link href={isContactPage ? '/#faq' : '#faq'} className="hover:bg-white px-4 py-2 rounded-md transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:bg-white px-4 py-2 rounded-md transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#1e4145] focus:outline-none cursor-pointer hover:bg-gray-400 rounded-md px-2 py-1"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-[#f5f7fa] shadow-lg z-[100] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl text-gray-700 focus:outline-none"
          >
            ×
          </button>

          <div className="flex flex-col justify-center items-center gap-12 mt-20 max-h-screen">
            <p style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px', color: 'rgb(30, 65, 69)' }}>
              Dr. Serena Blake
            </p>

            {[{ label: 'About', href: isContactPage ? '/#about' : '#about' },
            { label: 'Services', href: isContactPage ? '/#services' : '#services' },
            { label: 'FAQ', href: isContactPage ? '/#faq' : '#faq' },
            { label: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-white px-4 py-2 rounded-md transition"
                style={{
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '20px',
                  color: 'rgb(30, 65, 69)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
