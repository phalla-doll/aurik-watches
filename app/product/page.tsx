import Image from "next/image";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export default function ProductPage() {
  const products = [
    { id: "UA-01", type: "Flagship Chronograph", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop" },
    { id: "UA-02", type: "Skeleton Tourbillon", img: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000&auto=format&fit=crop" },
    { id: "UA-03", type: "Deep Sea Diver", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop" },
    { id: "UA-05", type: "Dual Time Zone Functionality", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop" },
    { id: "UA-06", type: "Automatic Chronograph", img: "https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=1000&auto=format&fit=crop" },
    { id: "UA-07", type: "Automatic Chronograph", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b grid-border px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-clash font-semibold tracking-widest uppercase">
          Aurik
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <Link href="/product" className="text-brand-red transition-colors">Product</Link>
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

      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b grid-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-red"></div>
              <span className="text-micro">The Complete Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.9] uppercase">
              Masterpieces<br />of Time
            </h1>
          </div>
          <p className="text-xs uppercase tracking-widest leading-relaxed text-brand-black/70 font-medium max-w-xs pb-2">
            Explore our full range of precision-engineered timepieces, crafted for the modern explorer.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-brand-border gap-px border-b grid-border">
        {products.map((product, i) => (
          <div key={product.id} className="flex flex-col bg-white">
            <div className="relative h-[450px] bg-brand-gray p-8 flex items-center justify-center group overflow-hidden">
              <Image
                src={product.img}
                alt={`Watch ${product.id}`}
                fill
                className="object-cover mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
            </div>
            <div className="p-6 flex flex-col gap-4 bg-white z-10">
              <div className="flex items-center justify-between border-b grid-border pb-4">
                <span className="font-clash font-medium text-xl">{product.id}</span>
                <Link href={`/product/${product.id.toLowerCase()}`} className="text-micro bg-brand-gray px-4 py-2 hover:bg-brand-black hover:text-white transition-colors flex items-center gap-2">
                  View Details <span className="font-clash">&gt;</span>
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-micro text-brand-black/60">
                <div className="flex justify-between border-b grid-border pb-3">
                  <span>Type :</span>
                  <span className="text-right">{product.type}</span>
                </div>
                <div className="pt-1 flex justify-between">
                  <span>Collection :</span>
                  <span>Swiss Precision</span>
                </div>
              </div>
            </div>
          </div>
        ))}
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
