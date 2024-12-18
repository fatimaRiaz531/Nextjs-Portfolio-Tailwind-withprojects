"use client"; 

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import EmailIcon from "../../public/images/email-icon.svg";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error("Error sending message:", await response.json());
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/fatimaRiaz531" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/fatima-r-87a1472b5/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:fatimariaz531@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {["email", "subject", "message"].map((field, index) => (
              <div className="mb-6" key={index}>
                <label htmlFor={field} className="text-white block mb-2 text-sm font-medium">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== "message" ? (
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder={field === "email" ? "xyz@gmail.com" : `Enter ${field}`}
                  />
                ) : (
                  <textarea
                    name={field}
                    id={field}
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                )}
              </div>
            ))}
            <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
