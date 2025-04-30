import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#5C2E2E]/50 z-10" />
        <Image
          src="/lookoutmtn.png"
          alt="Moon Valley Meadery - Lookout Mountain"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Moon Valley Meadery</h1>
          <p className="text-xl md:text-2xl mb-8">Handcrafted Mead in the Heart of Phoenix</p>
          <a
            href="/about"
            className="bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Discover Our Story
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5C2E2E]">Our Craft</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg h-full shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">Traditional Methods</h3>
                <p>We honor the ancient art of mead-making while incorporating modern techniques for consistent quality.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg h-full shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">Local Ingredients</h3>
                <p>We source our honey and other ingredients from local Arizona producers whenever possible.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg h-full shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#5C2E2E]">Unique Flavors</h3>
                <p>Our meads feature innovative flavor combinations that reflect the spirit of the Southwest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="bg-[#5C2E2E] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Visit Our Tasting Room</h2>
          <p className="text-xl mb-8">Experience our meads firsthand at our Phoenix location</p>
          <a
            href="/contact"
            className="bg-[#D4A437] hover:bg-[#C29430] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
