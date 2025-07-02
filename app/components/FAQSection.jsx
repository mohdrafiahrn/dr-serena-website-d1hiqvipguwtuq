'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqData = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
  {
    question: "What are your fees?",
    answer: "$200 for individual session and $240 for couples session",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };                

  return (
    <section id='faq' className="bg-[#b4dade] px-4 md:px-[122px] py-12 text-[#123436]">
      <h2 className="
            font-bold text-[36px] leading-[40px]
            sm:text-[36px] sm:leading-[40px]
            lg:text-[60px] lg:leading-[60px]
      "
       style={{ color: 'rgb(30,65,69)' }}

      >Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`py-4 cursor-pointer transition-all ease-in-out ${
              index === faqData.length - 1
                ? 'border-t border-b border-[#123436] min-h-20'
                : 'border-t border-[#123436] mt-5'
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 
              className="
              font-bold text-[24px] leading-[32px]
              sm:text-[24px] sm:leading-[32px]
              lg:text-[30px] lg:leading-[36px]  
              hover:text-[#4b5e61]"
               style={{ color: 'rgb(30,65,69)' }}
              >
                {faq.question}
              </h3>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="
                  font-normal text-[20px] leading-[28px]
              
              "
              style={{ color: 'rgb(30,65,69)' }}
              >{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
