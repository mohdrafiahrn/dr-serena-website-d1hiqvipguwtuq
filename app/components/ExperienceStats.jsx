'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function ExperienceStats() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [runCount, setRunCount] = useState(false);

  // Restart counter every time section enters view
  useEffect(() => {
    if (inView) {
      setRunCount(false); // Reset
      setTimeout(() => setRunCount(true), 300); // Restart
    }
  }, [inView]);



  return (
  <section ref={ref} className="bg-[#345c5d] text-white px-6 md:px-10 lg:px-32 py-8 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">


        {/* Years of Experience */}
        <div className="max-w-md">
          <h2 className="font-bold"
          style={{
            fontWeight:'800',
            fontSize:'48px',
            lineHeight:'48px',
            color:'rgb(245,247,250)',

          }}
          >
            {runCount && <CountUp start={0} end={8} duration={2} />}+
          </h2>
          <p className="text-lg font-semibold mt-2"
           style={{
            fontWeight:'600',
            fontSize:'16px',
            lineHeight:'24px',
            color:'rgb(245,247,250)',

          }}
          >Years Experience</p>
          <p className="text-sm mt-1 text-slate-100"
           style={{
            fontWeight:'400',
            fontSize:'14px',
            lineHeight:'20px',
            color:'rgb(245,247,250,0.8)',

          }}
          >
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        {/* Client Sessions */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold"
           style={{
            fontWeight:'800',
            fontSize:'48px',
            lineHeight:'48px',
            color:'rgb(245,247,250)',

          }}
          >
            {runCount && <CountUp start={0} end={500} duration={3} separator="," />}+
          </h2>
          <p className="text-lg font-semibold mt-2"
          style={{
            fontWeight:'600',
            fontSize:'16px',
            lineHeight:'24px',
            color:'rgb(245,247,250)',

          }}
          >Individual Client Sessions</p>
          <p className="text-sm mt-1 text-slate-100"
          style={{
            fontWeight:'400',
            fontSize:'14px',
            lineHeight:'20px',
            color:'rgb(245,247,250,0.8)',

          }}
          >
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>
      </div>
    </section>
  );
}
