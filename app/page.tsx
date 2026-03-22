import Image from "next/image";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b grid-border px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-clash font-semibold tracking-widest uppercase">
          Aurik
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <Link href="/product" className="hover:text-brand-red transition-colors">Product</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">About</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-brand-red transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button className="hover:text-brand-red transition-colors"><User size={20} strokeWidth={1.5} /></button>
          <button className="md:hidden hover:text-brand-red transition-colors"><Menu size={24} strokeWidth={1.5} /></button>
          <div className="hidden md:flex flex-col gap-[6px] cursor-pointer group">
            <div className="w-8 h-[2px] bg-brand-black group-hover:bg-brand-red transition-colors"></div>
            <div className="w-8 h-[2px] bg-brand-black group-hover:bg-brand-red transition-colors"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 md:col-start-3 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.9] uppercase mb-12">
              Meet the UA-01:<br />A new era in innovation
            </h1>
            <div className="flex items-start gap-4 md:ml-24 max-w-md">
              <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 font-clash">
                Y
              </div>
              <p className="text-xs uppercase tracking-widest leading-relaxed text-brand-black/70 font-medium">
                Our inspiration flows from the realms of engineering, motorsport, and the icons of contemporary design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full relative h-[40vh] md:h-[70vh] border-b grid-border">
        <Image
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop"
          alt="AURIK UA-01 Watch Profile"
          fill
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />
      </section>

      {/* Label */}
      <div className="px-6 py-8 text-right border-b grid-border">
        <span className="text-sm uppercase tracking-widest font-medium">Swiss Precision Engineering</span>
      </div>

      {/* Split Feature 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b grid-border">
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r grid-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-red"></div>
            <span className="text-micro">Crafted for everyday explorers.</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase leading-snug mb-10 max-w-lg">
            Expertly crafted for those who explore the world every day with precision and style in mind.
          </h2>
          <div>
            <button className="bg-brand-red text-white text-xs uppercase tracking-widest px-6 py-3 flex items-center gap-4 hover:bg-brand-black transition-colors">
              See Details <span className="font-clash text-lg leading-none">&gt;</span>
            </button>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto bg-brand-gray">
          <Image
            src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000&auto=format&fit=crop"
            alt="Watch mechanism detail"
            fill
            className="object-cover mix-blend-multiply grayscale opacity-80"
          />
        </div>
      </section>

      {/* Product Grid Header */}
      <div className="px-6 py-4 border-b grid-border">
        <span className="text-micro">Swiss Precision. Redefined</span>
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b grid-border">
        {[
          { id: "UA-05", type: "Dual Time Zone Functionality", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop" },
          { id: "UA-06", type: "Automatic Chronograph", img: "https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=1000&auto=format&fit=crop" },
          { id: "UA-07", type: "Automatic Chronograph", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop" }
        ].map((product, i) => (
          <div key={product.id} className={`flex flex-col ${i !== 2 ? 'border-b md:border-b-0 md:border-r grid-border' : ''}`}>
            <div className="relative h-[400px] bg-brand-gray p-8 flex items-center justify-center">
              <Image
                src={product.img}
                alt={`Watch ${product.id}`}
                fill
                className="object-contain p-12 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b grid-border pb-3">
                <span className="font-clash font-medium">{product.id}</span>
                <Link href={`/product/${product.id.toLowerCase()}`} className="text-micro bg-brand-gray px-3 py-1 hover:bg-brand-black hover:text-white transition-colors flex items-center gap-2">
                  Book Now <span className="font-clash">&gt;</span>
                </Link>
              </div>
              <div className="flex flex-col gap-1 text-micro text-brand-black/60">
                <div className="flex justify-between border-b grid-border pb-2">
                  <span>Type :</span>
                  <span className="text-right">{product.type}</span>
                </div>
                <div className="pt-1">
                  <span>Swiss Precision. Redefined</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Split Feature 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b grid-border">
        <div className="relative h-[50vh] md:h-[60vh] bg-white border-b md:border-b-0 md:border-r grid-border order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
            alt="Watch face detail"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-red"></div>
              <span className="text-micro">Introducin UA-01</span>
            </div>
            <button className="bg-brand-red text-white text-xs uppercase tracking-widest px-6 py-2 flex items-center gap-4 hover:bg-brand-black transition-colors">
              See Details <span className="font-clash text-lg leading-none">&gt;</span>
            </button>
          </div>
          <p className="text-xs uppercase tracking-widest leading-relaxed text-brand-black/70 font-medium max-w-sm">
            Our inspiration flows from the realms of engineering, motorsport.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b grid-border">
        <div className="px-6 py-8 border-b grid-border">
          <h2 className="text-2xl md:text-3xl uppercase">Development Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: "Made for Explorer", desc: "Aurik combines art and engineering, merging aesthetics with functionality.", img: "https://images.unsplash.com/photo-1580566230159-0123f0081f6d?q=80&w=1000&auto=format&fit=crop&grayscale" },
            { title: "Built for Explorers", desc: "Creating precise, innovative timepieces that celebrate life's moments.", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1000&auto=format&fit=crop&grayscale" },
            { title: "Crafted for Comfort", desc: "Comfort guides case size, curves, and wrist pressure design.", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop&grayscale" }
          ].map((item, i) => (
            <div key={i} className={`p-6 ${i !== 2 ? 'border-b md:border-b-0 md:border-r grid-border' : ''}`}>
              <div className="relative h-48 bg-brand-gray mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover mix-blend-multiply opacity-60"
                />
              </div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-3">{item.title}</h3>
              <p className="text-micro text-brand-black/60 leading-relaxed normal-case tracking-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <Link href="/" className="text-4xl font-clash font-semibold tracking-widest uppercase mb-8 block">
              Aurik
            </Link>
          </div>
          <div className="md:col-span-6 flex flex-col gap-2 text-3xl md:text-5xl lg:text-6xl font-clash uppercase">
            <Link href="/product" className="hover:text-brand-red transition-colors">Product</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Process</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Contacts</Link>
          </div>
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
            {['Awwwards', 'TikTok', 'Behance', 'LinkedIn', 'Instagram', 'Email'].map((link) => (
              <a key={link} href="#" className="text-micro border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-brand-black transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Trust / Featured In Section */}
      <section className="bg-brand-black text-white border-t border-white/10 px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-micro text-white/50 text-center md:text-left">Recognized By</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="font-clash text-xl md:text-2xl uppercase tracking-widest">Hodinkee</span>
            <span className="font-serif text-lg md:text-xl italic">GQ Magazine</span>
            <span className="font-clash text-xl md:text-2xl uppercase tracking-widest">Forbes</span>
            <span className="font-sans text-xl md:text-2xl font-bold tracking-tighter">WIRED</span>
          </div>
        </div>
      </section>
    </main>
  );
}
