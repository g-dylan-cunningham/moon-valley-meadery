import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Moon Valley Meadery | Phoenix's Artisanal Mead Brewery",
  description: "Discover Moon Valley Meadery, Phoenix's premier artisanal mead brewery. Handcrafted mead made from local honey, traditional methods, and a passion for quality. Visit us for unique flavors and a true taste of Arizona.",
  keywords: [
    "mead", "meadery", "Phoenix mead", "Arizona mead", "artisanal mead", "craft mead", "local honey", "honey wine", "Moon Valley Meadery", "Phoenix brewery", "traditional mead", "small batch mead", "mead tasting", "Arizona brewery", "craft beverage", "local Phoenix drinks"
  ],
  openGraph: {
    title: "Moon Valley Meadery | Phoenix's Artisanal Mead Brewery",
    description: "Handcrafted mead in Phoenix, Arizona. Made with local honey and traditional methods. Discover unique flavors at Moon Valley Meadery.",
    url: "https://moonvalleymeadery.com/",
    siteName: "Moon Valley Meadery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moon Valley Meadery bottle of mead with honeycomb"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Valley Meadery | Phoenix's Artisanal Mead Brewery",
    description: "Handcrafted mead in Phoenix, Arizona. Made with local honey and traditional methods. Discover unique flavors at Moon Valley Meadery.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="bg-[#F4F0E6]">{children}</main>
      </body>
    </html>
  );
}
