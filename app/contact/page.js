export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#5C2E2E]">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#5C2E2E]">Join Our Mailing List</h2>
            <p className="mb-6 text-[#5C2E2E]">Stay updated on our latest meads, special releases, and meadery news!</p>
            <form className="space-y-6">
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
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Subscribe
              </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 