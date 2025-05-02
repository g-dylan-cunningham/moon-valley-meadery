import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#5C2E2E]/50 z-10" />
        <Image
          src="/beesOnMug.png"
          alt="Moon Valley Meadery - Bees on Mug"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">A Journey of Passion and Tradition</p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Story Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#5C2E2E]">Welcome to Moon Valley Meadery</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Nestled in the heart of our enchanting valley, Moon Valley Meadery celebrates the ancient craft of mead-making. This blossomed over the past four years, growing from a passionate hobby into something truly special.
                </p>
                <p>
                  Born from our passion for crafting unique and delightful meads, we take pride in not only the ingredients we use but our artisanal techniques. Our mead is cherished among friends and family, but has also made cherished birthday gifts, symbolizing love and celebration.
                </p>
                <p>
                  At Moon Valley Meadery, every bottle tells a story, and we invite you to join us on this sweet journey as we share our passion for mead with the world. Cheers to life, laughter, and mead!
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C2E2E]">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">1. Local Sourcing</h3>
                <p>We carefully select the finest local raw honey to create our traditional mead, ensuring quality in every batch.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">2. Pure Ingredients</h3>
                <p>Using only purified water, quality yeast, and raw honey, we keep our mead pure and true to tradition.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">3. Artisanal Care</h3>
                <p>Each batch is crafted with attention to detail, allowing the natural flavors to develop perfectly.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#5C2E2E] text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg mb-6">
              Share in our passion for traditional mead-making and join our growing community of mead enthusiasts.
            </p>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Mark Miller</h3>
                  <p className="text-sm mb-1">Owner</p>
                  <a href="tel:602-935-1417" className="text-[#D4A437] hover:text-[#C29430] transition-colors">602-935-1417</a>
                  <br />
                  <a href="mailto:MoonValleyMeadery@gmail.com" className="text-[#D4A437] hover:text-[#C29430] transition-colors">
                    MoonValleyMeadery@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Kira Miller</h3>
                  <p className="text-sm mb-1">Owner</p>
                  <a href="tel:602-935-1417" className="text-[#D4A437] hover:text-[#C29430] transition-colors">602-935-1417</a>
                  <br />
                  <a href="mailto:MoonValleyMeadery@gmail.com" className="text-[#D4A437] hover:text-[#C29430] transition-colors">
                    MoonValleyMeadery@gmail.com
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.moonvalleymeadery.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D4A437] hover:text-[#C29430] transition-colors"
                >
                  www.moonvalleymeadery.com
                </a>
              </div>
              <a
                href="/contact"
                className="inline-block bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Get in Touch
              </a>
              <p className="text-xs">Produced & bottled in Phoenix, AZ USA</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 