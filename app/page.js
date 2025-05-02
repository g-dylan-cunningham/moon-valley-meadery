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
      {/* Main Content Row */}
      <div className="lg:grid lg:grid-cols-12 lg:min-h-[80vh]">
        {/* Content Section - Left Side */}
        <div className="lg:col-span-5 p-8 flex flex-col">
          {/* Product Details Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex-grow">
            <h2 className="text-4xl font-bold mb-6 text-[#5C2E2E] leading-tight nav-font">Traditional Mead</h2>
            <p className="mb-6 text-lg">The oldest libation in history, this honey-based nectar is perfect to sip and drab any time of the day.</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#5C2E2E] text-2xl mb-3 nav-font">Ingredients</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Purified Water</li>
                  <li>Local Raw Honey</li>
                  <li>Quality Yeast</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#5C2E2E] text-2xl mb-3 nav-font">Product Details</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>500 ml</li>
                  <li>13% ABV</li>
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

        {/* Hero Section - Right Side */}
        <div className="lg:col-span-7 p-8">
          <div className="bg-white rounded-lg shadow-md h-full overflow-hidden relative">
            <Image
              src="/moon-valley-meadery-home.png"
              alt="Moon Valley Meadery - Mead Made For You. A bottle of traditional mead displayed against a rustic background."
              fill
              sizes="(max-width: 768px) 100vw, 58.33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Contact Section - Bottom */}
      <div className="bg-[#5C2E2E]">
        <div className="max-w-7xl mx-auto px-8 py-12 text-white text-center">
          <h2 className={`text-4xl font-bold mb-6 ${bioRhyme.className}`}>Join Our Journey</h2>
          <p className="text-lg mb-6">Experience the magic of traditional mead-making in the heart of Phoenix</p>
          <div className="space-y-4">
            <a
              href="/contact"
              className="bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
            >
              Visit Our Meadery
            </a>
            <p className="text-sm block mt-4">MoonValleyMeadery@gmail.com</p>
            <p className="text-xs">Enjoy Responsibly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
