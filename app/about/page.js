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
          <p className="text-xl md:text-2xl">Crafting exceptional mead in the heart of Phoenix</p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Founders Section */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#5C2E2E]">Meet Mark & Kira</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                Mark and Kira&apos;s journey into mead-making began with a shared passion for craft beverages and Arizona&apos;s rich agricultural heritage. What started as a hobby quickly evolved into a mission to create exceptional meads that showcase the unique flavors of the Southwest.
              </p>
              <p className="text-lg">
                Their dedication to quality and innovation has made Moon Valley Meadery a beloved destination for mead enthusiasts and newcomers alike.
              </p>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C2E2E]">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">1. Sourcing</h3>
                <p>We work closely with local beekeepers and farmers to source the finest Arizona honey and ingredients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">2. Fermentation</h3>
                <p>Our meads are carefully fermented using traditional methods, with each batch receiving individual attention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">3. Aging</h3>
                <p>We believe in giving our meads the time they need to develop their full character and complexity.</p>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="bg-[#5C2E2E] text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg mb-4">
              Our tasting room is located in the heart of Phoenix, where you can sample our latest creations and learn more about the art of mead-making.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Get Directions
            </a>
          </section>
        </div>
      </div>
    </div>
  )
} 