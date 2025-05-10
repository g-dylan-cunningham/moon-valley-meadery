import Image from "next/image";
import { BioRhyme } from 'next/font/google'

const bioRhyme = BioRhyme({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F0E6]">
      {/* Responsive Main Content Row */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:min-h-[80vh] lg:gap-0 gap-0 px-0">
        {/* Hero Section - Top on mobile, right on desktop */}
        <div className="order-1 lg:order-2 lg:col-span-7 pt-0 pb-0 px-0 lg:px-0 lg:pt-8 lg:pb-8">
          <div className="bg-white lg:rounded-lg shadow-md overflow-hidden relative w-full h-[70vh] lg:h-full lg:w-full p-0 m-0">
            <Image
              src="/mvm-moon-bee-centered-final.png"
              alt="Moon Valley Meadery log over mountains and bee moon"
              fill
              sizes="(max-width: 1024px) 100vw, 58.33vw"
              className="object-cover"
              priority
            />

          </div>
        </div>
        {/* Content Section - Below hero on mobile, left on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-5 px-0 pt-8 pb-8 lg:p-8 flex flex-col">
          {/* Product Details Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex-grow">
            <h2 className="text-4xl font-bold mb-6 text-[#5C2E2E] leading-tight nav-font">Traditional Mead</h2>
            <p className="mb-6 text-lg">The oldest libation in history, this honey-based nectar is perfect to sip and drab any time of the day.</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#5C2E2E] text-2xl mb-3 nav-font">Ingredients</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li className="text-[#D4A437]">Purified Water</li>
                  <li className="text-[#D4A437]">Local Raw Honey</li>
                  <li className="text-[#D4A437]">Quality Yeast</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#5C2E2E] text-2xl mb-3 nav-font">Product Details</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li className="text-[#D4A437]">500 ml</li>
                  <li className="text-[#D4A437]">13% ABV</li>
                </ul>
              </div>
              <p className="text-sm italic">Contains no added sulfites. May contain naturally occurring sulfites.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#5C2E2E] nav-font">Crafted with Care</h3>
            <p className="text-lg leading-relaxed">Every bottle tells a story of tradition, craftsmanship, and the sweet essence of local ingredients.</p>
          </div>
        </div>
      </div>

      {/* Contact Section - Bottom */}
      <div className="bg-[#5C2E2E]">
        <div className="max-w-7xl mx-auto px-8 py-12 text-white text-center">
          <h2 className={`text-4xl font-bold mb-6 ${bioRhyme.className}`}>Join Our Journey</h2>
          <p className="text-lg mb-6 force-text-white">Experience the magic of traditional mead-making in the heart of Phoenix</p>
          <div className="space-y-4">
            <a
              href="/contact"
              className="bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
            >
              Visit Our Meadery
            </a>
            <p className="text-sm block mt-4 force-text-white">MoonValleyMeadery@gmail.com</p>
            <p className="text-xs force-text-white">Enjoy Responsibly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
