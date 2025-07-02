'use client';
import Image from 'next/image';

export default function ServicesSection() {
    const services = [
        {
            title: 'Anxiety & Stress Management',
            description:
                'Learn to manage overwhelming emotions with practical tools and compassionate guidance. Dr. Blake uses evidence-based techniques to help you reduce anxiety...',
            img: '/s1.jpg',
        },
        {
            title: 'Relationship Counseling',
            description:
                'Build healthier communication, resolve conflicts, and strengthen emotional connection. Whether you’re navigating a breakup or ...',
            img: '/s2.jpg',
        },
        {
            title: 'Trauma Recovery',
            description:
                'Heal from past experiences in a safe, supportive environment. Dr. Blake integrates trauma-informed care ...',
            img: '/s3.jpg',
        },
    ];

    return (
        <section id='services' className="bg-[#f5f7fa] py-12 px-4 md:px-[122px]">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2b4b4c] mb-10 text-left"
                style={{
                    fontWeight: '700',
                    fontSize: '48px',
                    lineHeight: '48px'
                }}
            >
                How I Help
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#b4dade] border border-[#2b4b4c] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
                    >
                        <div className="p-4 flex flex-col h-full">
                            {/* Image */}
                            <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-52 object-cover rounded-md mb-4"
                                />
                            </div>

                            {/* Title */}
                            <div className="p-4 flex flex-col justify-between flex-1">
                                <h3 className="text-lg font-bold text-[#173839] mb-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '24px',
                                        lineHeight: '32px',
                                        color:'rgb(30, 65, 69)',
                                    }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#1c3f41] mb-4 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color:'rgb(30, 65, 69)',
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* Button - NO HOVER SLIDE HERE */}
                                <button className="w-full border border-[#173839] text-[#173839] py-2 rounded hover:bg-[#ffffff] hover:text-black transition font-medium"
                                    style={{
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color:'rgb(30, 65, 69)',
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
