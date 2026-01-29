export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* 1. FIXED BACKGROUND LAYER (The Rhodes Map) 
          This layer stays still while you scroll. 
          Note: We added a gray placeholder color until you add an image. 
      */}
      <div className="fixed inset-0 z-[-1] bg-gray-900 opacity-40">
        {/* Later, we will add: className="bg-[url('/map-bg.jpg')] bg-cover bg-center" */}
      </div>

      {/* 2. HERO SECTION (Full Screen) 
          Solid Black background to start.
      */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-alpha-black px-4 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-wider text-white md:text-7xl">
          ALPHA <span className="text-alpha-brown">TRANSFER</span>
        </h1>
        <p className="mt-4 font-light tracking-[0.2em] text-gray-400">
          RHODES VIP TRANSIT
        </p>
        <div className="mt-12 h-[1px] w-24 bg-alpha-brown"></div>
      </section>

      {/* 3. MAIN CONTENT (Warm White) 
          This section scrolls UP and covers the hero/map.
      */}
      <section className="relative w-full bg-alpha-warm px-6 py-24 text-alpha-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-heading text-3xl font-bold text-alpha-black md:text-4xl">
            Experience the <span className="text-alpha-brown">Luxury</span>
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to Rhodes. Whether you require an airport transfer, a private tour, 
            or a chauffeur for your special event, Alpha Transfer provides an 
            unmatched level of comfort and style.
          </p>

          {/* Spacer to demonstrate scrolling */}
          <div className="mt-12 h-64 w-full rounded-xl bg-gray-200 shadow-inner flex items-center justify-center text-gray-400">
            Booking Form Placeholder
          </div>
        </div>
      </section>

    </main>
  );
}