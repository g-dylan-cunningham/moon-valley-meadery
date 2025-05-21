"use client";
import { useState } from "react";
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function generateId() {
    return Math.random().toString(36).substr(2, 9) + Date.now();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const id = generateId();
    const received = new Date().toISOString();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, email, message, received }),
      });
      if (res.ok) {
        setStatus("Thank you for joining our mailing list!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("There was an error. Please try again.");
      }
    } catch (err) {
      setStatus("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#5C2E2E]">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#5C2E2E]">Join Our Mailing List</h2>
            <p className="mb-6 text-[#5C2E2E]">Stay updated on our latest meads, special releases, and meadery news!</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#5C2E2E]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A437] focus:border-[#D4A437]"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#5C2E2E]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A437] focus:border-[#D4A437]"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#5C2E2E]">
                  Tell us about your interest in mead (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A437] focus:border-[#D4A437]"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
              {status && <p className="text-center mt-4 text-[#5C2E2E]">{status}</p>}
            </form>
          </div>
          
          {/* Location Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#5C2E2E]">Connect With Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-[#5C2E2E]">Mead Enthusiasts Welcome!</h3>
              <p className="mb-4">
                Are you passionate about mead? We&apos;d love to hear from you! Whether you&apos;re curious about our traditional brewing process, 
                interested in our latest batches, or simply want to connect with fellow mead lovers, don&apos;t hesitate to reach out.
              </p>
              <p className="mb-4">
                As a small-batch meadery in Phoenix, we take pride in crafting authentic, honey-based meads that honor this ancient tradition. 
                Let&apos;s share our love for this timeless beverage!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#5C2E2E]">Location</h3>
              <p className="mb-4">
                7th St and Greenway<br />
                Phoenix, AZ 85022
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Get Directions
              </a>
              <div className="mt-8">
                <p className="text-sm mb-4 text-[#5C2E2E]">Follow us on social media</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 