export default function Home() {
  return (
    // The main container ensures the layout takes up the full screen height.
    <main className="min-h-screen bg-black text-white">
      {/*         HERO SECTION 
        This section is set to be exactly the height of the screen (h-screen) and acts as the
        container for all the content. It has a relative position so we can position
        child elements absolutely within it.
      */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        // 1. CORRECTED: The backgroundImage is now correctly set to your 'RobotTeam.jpg'.
        // For this to work in a Next.js project, 'RobotTeam.jpg' must be placed in the `/public` directory.
        style={{ backgroundImage: "url('/RobotTeam.jpg')" }}
        aria-label="A team of robots working on advanced technology"
      >
        {/* A semi-transparent black overlay to improve text readability. */}
        <div className="absolute inset-0 bg-black/60" />

        {/*           Content Container 
          2. FIX: This is the key to the layout.
           - `h-full w-full`: Ensures this container fills the entire section.
           - `flex flex-col`: Stacks the header and form vertically.
           - `justify-between`: Pushes the first item (header) to the top and the last item (form) to the bottom.
           - `items-center`: Centers both the header and form horizontally on the page.
        */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 md:p-12">
          {/* 3. FIX: TOP-CENTERED HEADING */}
          <h1
            className="
              max-w-4xl text-center font-extrabold tracking-tight 
              rounded-xl border border-white/15 bg-black/40 backdrop-blur 
              px-6 py-3 shadow-lg text-[clamp(1.8rem,3vw+1rem,3.5rem)]
            "
          >
            For a Quantum Leap in AI Technology
          </h1>

          {/* 4. FIX: CENTERED FOOTER CONTACT FORM */}
          <div className="w-full max-w-md">
            <form className="flex flex-col gap-4 rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur shadow-lg">
              <h2 className="text-center text-2xl font-bold text-white">Contact Us</h2>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-white/20 bg-white/5 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-md border-white/20 bg-white/5 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

