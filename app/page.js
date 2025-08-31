// FILE: app/page.js
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-top" // 1. Set height to full screen and adjust image position
        style={{ backgroundImage: "url('/RobotTeam.jpg')" }}
        aria-label="Hero"
      >
        {/* Semi-transparent overlay for text readability (Optional but recommended) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top-centered heading */}
        {/* 2. Adjusted padding to move text down into a better position */}
        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-24">
          <h1
            className="
              mx-auto max-w-4xl px-4 py-2 text-center font-extrabold tracking-tight 
              rounded-xl border border-white/15 bg-black/35 backdrop-blur 
              shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-[clamp(1.5rem,3vw+1rem,3rem)]
            " // 3. Slightly increased font size for better impact
          >
            For a Quantum Leap in AI Technology
          </h1>
        </div>
      </section>

      {/* Your existing page content goes here */}
      <div className="flex-1 p-8">
        {/* Example content */}
        <h2 className="text-3xl font-bold">Page Content</h2>
        <p className="mt-4 text-gray-400">Your main page content starts here.</p>
      </div>
    </main>
  );
}
