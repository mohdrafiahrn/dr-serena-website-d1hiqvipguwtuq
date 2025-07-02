'use client';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id='about' className="bg-[#b4dade] py-12 px-4 md:px-[122px]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

                {/* Image + Badge Section */}
                <div className="relative w-full md:w-1/3">
                    <div className="rounded-xl overflow-hidden shadow-lg border-[10px] border-[#daf5f1]">
                        <Image
                            src="/sb1.jpg" // replace with actual image
                            alt="Dr. Serena Blake"
                            width={400}
                            height={500}
                            className="object-cover w-full"
                        />
                    </div>

                    {/* Name Badge */}
                    <div className="absolute bottom-2 left-2 bg-gray-100 px-3 py-1 rounded shadow text-xs font-medium">
                        <p
                            style={{
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: 'rgb(0, 0, 0)',
                            }}
                        >Dr. Serena Blake <br />
                            <span className="text-gray-600"
                                style={{
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    lineHeight: '16px',
                                    color: 'rgb(0, 0, 0)',
                                }}
                            >PsyD</span></p>

                        <div style={{
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'rgb(0, 0, 0)',
                        }}>
                            <span>⭐ Top Rated</span> |

                            <span>8+ Years Experience</span>

                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 text-[#173839]">
                    {/* SEO Badge */}
                    <span className="inline-block bg-[#fef3c7] text-xs text-gray-800 px-2 py-1 rounded mb-2"
                        style={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'rgb(30, 65, 69)',
                        }}
                    >
                        About Dr. Serena Blake, PsyD – Experienced Clinical Psychologist in Maplewood Drive, Los Angeles
                    </span>

                    <h2
                        className="
                            font-bold text-[36px] leading-[40px] 
                            sm:text-[42px] sm:leading-[44px] 
                            lg:text-[48px] lg:leading-[48px] 
                            text-[#1e4145] mb-6
                        "
                    >
                        Hi I'm Dr. Serena Blake
                    </h2>

                    <p className="
                        mb-5 font-medium text-[18px] leading-[29px]
                        sm:text-[18px] sm:leading-[29px]
                        lg:text-[24px] lg:leading-[39px]
                        "
                        style={{ color: 'rgb(30,65,69)' }}
                        >
                        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <span className='font-bold'> eight years of experience </span> and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with <span className='font-bold'> compassionate </span>, personalized care to help you overcome <span className='font-bold'> anxiety</span>, strengthen <span className='font-bold'>relationships</span>, and heal from <span className='font-bold'>trauma</span> . Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
}
