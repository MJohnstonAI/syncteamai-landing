// FILE: app/page.js
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* HERO */}
      <section
        className="relative h-[65vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/RobotTeam.jpg')" }} // /public/RobotTeam.jpg
        aria-label="Hero"
      >
        {/* Top-centered heading */}
        <div className="absolute inset-x-0 top-5 flex justify-center">
          <h1 className="mx-auto px-4 py-2 text-center font-extrabold tracking-tight rounded-xl border border-white/15 bg-black/35 backdrop-blur shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-[clamp(1.125rem,2vw+1rem,2.25rem)]">
            For a Quantum Leap in AI Technology
          </h1>
        </div>

        {/* Optional bottom fade into content/footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/70" />
      </section>

      {/* Your existing page content goes here */}
      <div className="flex-1">
        {/* ... */}
      </div>
    </main>
  );
}
