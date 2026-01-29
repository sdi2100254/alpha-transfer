import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* 1. FIXED BACKGROUND LAYER 
          FIX: We set this to 'z-0'. 
          This puts the map ON TOP of the black body background.
      */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/rhodes-map.jpg"
          alt="Map of Rhodes Background"
          fill
          priority
          className="object-cover opacity-50 grayscale"
        />
      </div>

      {/* 2. HERO SECTION 
          FIX: We set this to 'z-10' (relative).
          This forces the text layer to sit ON TOP of the map layer.
      */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-black/30 px-4 text-center backdrop-blur-[2px]">
        <h1 className="font-heading text-5xl font-bold tracking-wider text-white md:text-7xl">
          ALPHA <span className="text-alpha-brown">TRANSFER</span>
        </h1>
        <p className="mt-4 font-light tracking-[0.2em] text-gray-300">
          RHODES VIP TRANSIT
        </p>
        <div className="mt-12 h-[1px] w-24 bg-alpha-brown"></div>
      </section>

      {/* 3. MAIN CONTENT (Warm White) 
          This layer (z-10) will slide over the fixed map as you scroll.
      */}
      <section className="relative z-10 w-full bg-alpha-warm px-6 py-24 text-alpha-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-heading text-3xl font-bold text-alpha-black md:text-4xl">
            Experience the <span className="text-alpha-brown">Luxury</span>
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to Rhodes. Whether you require an airport transfer, a private tour, 
            or a chauffeur for your special event, Alpha Transfer provides an 
            unmatched level of comfort and style.
          </p>

          <div className="mt-12 h-64 w-full rounded-xl bg-gray-200 shadow-inner flex items-center justify-center text-gray-400">
            Booking Form Placeholder
          </div>
        </div>
      </section>

    </main>
  );
}