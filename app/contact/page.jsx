'use client';

import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Prevent non-digit input in phone field
    if (name === 'phone' && /[^0-9]/.test(value)) return;

    // Prevent numbers in name field
    if (name === 'name' && /[0-9]/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name can only contain letters';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]+$/.test(formData.phone)) newErrors.phone = 'Phone must contain only numbers';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.time.trim()) newErrors.time = 'Preferred time is required';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      alert('Thank you! Your message has been submitted.');
      console.log('Form submitted:', formData);
      // Reset form if needed:
      // setFormData({ name: '', phone: '', email: '', message: '', time: '', consent: false });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col items-center justify-start p-6 md:flex-row md:justify-center md:items-start md:gap-12">
      {/* Left side - Info */}
      <div className="max-w-md text-center md:text-left">
        <img
          src="/sb1.jpg"
          alt="Ellie Shumaker"
          className="rounded-lg mb-4 mx-auto md:mx-0"
          height={200}
          width={220}
        />
        <h1 className="font-extrabold text-[33px] leading-[40px] mb-4" style={{ color: 'rgb(30,65,69)' }}>
          Hi, I'm Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h1>
        <p className="font-medium text-[16px] leading-[24px] sm:text-[16px] sm:leading-[24px] lg:text-[20px] lg:leading-[28px]" style={{ color: 'rgb(30,65,69)' }}>
          with <strong>eight years of experience</strong> and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="mt-10 md:mt-0 max-w-md w-full bg-[#f5f7fa] rounded-xl p-6 ms-0 border border-[#1e4145] shadow-sm">
        <h2 className="text-xl font-semibold text-[#1e4145] mb-2 text-center">Get In Touch</h2>
        <p className="text-sm text-center text-[#1e4145] mb-4">
          Fill out the fields below and Dr. Blake will be in touch with you soon.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="What brings you here?"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <input
              type="text"
              name="time"
              placeholder="Preferred time to reach you"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-[#1e4145]">
              I agree to be contacted.
            </label>
          </div>
          {errors.consent && <p className="text-red-600 text-sm">{errors.consent}</p>}

          <button
            type="submit"
            className="w-full bg-[#1e4145] text-white py-2 rounded hover:bg-white hover:text-[#1e4145] border border-[#1e4145] cursor-pointer"
          >
            Submit
          </button>

          <p className="flex items-start gap-2 font-normal text-[14px] leading-[20px] mt-4" style={{ color: 'rgb(20,65,51)' }}>
            <BsInfoCircle className="mt-0.5 text-[35px]" />
            <span className="mt-2">
              By submitting, you confirm you are 18+ and agree to our <a href="#" className="underline">Privacy Policy & TOS</a> and to receive emails & texts from Dr. Serena Blake.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
