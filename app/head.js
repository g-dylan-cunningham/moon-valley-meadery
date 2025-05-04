export default function Head() {
  return (
    <>
      <title>Moon Valley Meadery | Phoenix&apos;s Artisanal Mead Brewery</title>
      <meta name="description" content="Discover Moon Valley Meadery, Phoenix&apos;s premier artisanal mead brewery. Handcrafted mead made from local honey, traditional methods, and a passion for quality. Visit us for unique flavors and a true taste of Arizona." />
      <meta name="keywords" content="mead, meadery, Phoenix mead, Arizona mead, artisanal mead, craft mead, local honey, honey wine, Moon Valley Meadery, Phoenix brewery, traditional mead, small batch mead, mead tasting, Arizona brewery, craft beverage, local Phoenix drinks" />
      {/* Open Graph */}
      <meta property="og:title" content="Moon Valley Meadery | Phoenix&apos;s Artisanal Mead Brewery" />
      <meta property="og:description" content="Handcrafted mead in Phoenix, Arizona. Made with local honey and traditional methods. Discover unique flavors at Moon Valley Meadery." />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Moon Valley Meadery | Phoenix&apos;s Artisanal Mead Brewery" />
      <meta name="twitter:description" content="Handcrafted mead in Phoenix, Arizona. Made with local honey and traditional methods. Discover unique flavors at Moon Valley Meadery." />
      <meta name="twitter:image" content="/og-image.jpg" />
      {/* JSON-LD Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Brewery",
        "name": "Moon Valley Meadery",
        "image": "/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7th St and Greenway",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85022",
          "addressCountry": "US"
        },
        "telephone": "+1-602-935-1417",
        "email": "MoonValleyMeadery@gmail.com",
        "url": "https://yourdomain.com/",
        "description": "Moon Valley Meadery is a craft mead brewery in Phoenix, Arizona, specializing in small-batch, artisanal mead made from local honey."
      }) }} />
    </>
  );
} 