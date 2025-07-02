// 'use client';
// import { useEffect, useState } from 'react';
// import { BsTelephoneFill, BsGeoAltFill } from 'react-icons/bs';

// export default function AddressBar() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY < 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`w-full fixed top-0 left-0 z-[60] bg-[#e0f4f7] text-[#3a93a1] text-sm px-[122px] py-2 shadow transition-transform duration-200 ease-in-out ${
//         show ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <span className="flex items-center gap-2">
//           <BsTelephoneFill size={14} />
//           (123) 456-7890
//         </span>
//         <span className="flex items-center gap-2">
//           <BsGeoAltFill size={14} />
//           123 Main Street, City Name
//         </span>
//       </div>
//     </div>
//   );
// }
