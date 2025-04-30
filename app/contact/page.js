export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#5C2E2E]">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#5C2E2E]">Send Us a Message</h2>
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
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-[#5C2E2E]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A437] focus:border-[#D4A437]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#5C2E2E]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A437] focus:border-[#D4A437]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Location Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#5C2E2E]">Visit Our Tasting Room</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2 text-[#5C2E2E]">Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Thursday: 3pm - 9pm</li>
                <li>Friday - Saturday: 12pm - 10pm</li>
                <li>Sunday: 12pm - 8pm</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#5C2E2E]">Location</h3>
              <p className="mb-4">
                123 Moon Valley Drive<br />
                Phoenix, AZ 85001
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