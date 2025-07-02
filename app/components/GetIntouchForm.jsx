'use client'

import { useState } from "react";
import Link from 'next/link';
import { BsInfoCircle } from "react-icons/bs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone should be exactly 10 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="InTouch" className="min-h-screen bg-[#b5dbdf] p-6 flex flex-col items-center gap-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-25 md:gap-48 w-full max-w-6xl">
        <div className="w-full md:w-1/2 max-w-sm flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <div>
            <h2 className="font-semibold text-[30px] leading-[36px] sm:text-[30px] sm:leading-[36px] lg:text-[36px] lg:leading-[40px] mt-10" style={{ color: 'rgb(30,65,69)' }}>
              Our Office
            </h2>
            <p className="font-normal tex-[20px] leading-[28px]" style={{ color: 'rgb(30,65,69)' }}>
              1287 Maplewood Drive<br />CA 90026<br />Los Angeles
            </p>
            <button className="mt-2 text-sm text-white bg-gray-700 px-2 py-1 rounded">Google Maps</button>

            <h2 className="font-semibold text-[30px] leading-[36px] sm:text-[30px] sm:leading-[36px] lg:text-[36px] lg:leading-[40px] mt-10" style={{ color: 'rgb(30,65,69)' }}>
              Office Hours
            </h2>
            <p className="font-normal tex-[20px] leading-[28px]" style={{ color: 'rgb(30,65,69)' }}>
              In-person: Tue & Thu, 10 AM–6 PM<br />
              Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
            </p>

            <h2 className="font-semibold text-[30px] leading-[36px] sm:text-[30px] sm:leading-[36px] lg:text-[36px] lg:leading-[40px] mt-10" style={{ color: 'rgb(30,65,69)' }}>
              Contact
            </h2>
            <p className="font-normal tex-[20px] leading-[28px]" style={{ color: 'rgb(30,65,69)' }}>
              📞 (323) 555-0192
            </p>
            <p className="font-normal tex-[20px] leading-[28px]" style={{ color: 'rgb(30,65,69)' }}>
              Email: serena@blakepsychology.com
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#f5f7fa] p-6 rounded-xl shadow-lg w-full md:w-1/3 border border-[#1e4145]"
        >
          <div className="text-center mb-4">
            <h2 className="font-bold text-[24px] leading-[32px] text-center" style={{ color: 'rgb(20,65,51)' }}>
              Get In Touch
            </h2>
            <p className="font-normal text-[14px] leading-[20px] mt-2 text-justify" style={{ color: 'rgb(20,65,51)' }}>
              Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
            </p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-[14px] leading-[20px]" style={{ color: 'rgb(20,65,51)' }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-[14px] leading-[20px]" style={{ color: 'rgb(20,65,51)' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-[14px] leading-[20px]" style={{ color: 'rgb(20,65,51)' }}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 234-5678"
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-[14px] leading-[20px]" style={{ color: 'rgb(20,65,51)' }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What brings you here?"
              className="w-full p-2 border rounded font-normal text-[14px] leading-[20px] text-black/80 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-black/50"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center font-medium text-[14px] leading-[20px]" style={{ color: 'rgb(20,65,51)' }}>
              <input type="checkbox" required className="mr-2 text-[#1e4145]" /> I'm not a robot
            </label>
          </div>

          <button
            type="submit"
            className="w-full border-2 border-[#1e4145] bg-[#1e4145] font-medium text-[14px] leading-[20px] px-4 py-2 rounded hover:bg-white hover:text-[#1e4145] text-[#88c6ce] cursor-pointer"
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

      <div className="mt-6 border border-red-600 p-3 rounded bg-[#f5f7fa] w-full max-w-5xl">
        <div className="flex items-center gap-2 mb-2">
          <BsInfoCircle className="text-[20px] text-red-700" />
          <p className="font-bold text-[18px] leading-[28px]" style={{ color: 'rgb(195,0,16)' }}>
            Please Note:
          </p>
        </div>

        <p className="font-normal text-[18px] leading-[28px]" style={{ color: 'rgb(30,64,175)' }}>
          I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for <strong className="font-bold">out-of-network benefits</strong> with your insurance company.
        </p>
      </div>
    </div>
  );
}
