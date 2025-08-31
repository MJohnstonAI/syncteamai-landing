export default function Home() {
  return (
    // The main container ensures the layout takes up at least the full screen height.
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      {/* This section serves as the main view, with a background image covering the entire screen. */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        // Note: I've used a placeholder image as I don't have access to your local '/RobotTeam.jpg'.
        // You can replace this URL with your original image path.
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop')" }}
        aria-label="Hero Background"
      >
        {/* A semi-transparent overlay is applied to improve text readability against the background. */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Container */}
        {/* This container uses flexbox to position the header and form.
           - 'flex-col' stacks the children vertically.
           - 'justify-between' pushes the header to the top and the form to the bottom.
           - 'items-center' centers both elements horizontally.
           - Padding ('p-8', etc.) ensures content doesn't touch the screen edges. */}
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 sm:p-12 md:p-16">
          {/* Top-centered heading with a glassmorphism effect */}
          <h1
            className="
              max-w-4xl text-center font-extrabold tracking-tight 
              rounded-xl border border-white/15 bg-black/40 backdrop-blur 
              px-6 py-3 shadow-lg text-[clamp(1.8rem,3vw+1rem,3.5rem)]
            "
          >
            For a Quantum Leap in AI Technology
          </h1>

          {/* Centered Footer Contact Form */}
          {/* The form is wrapped in a div to control its width and apply consistent styling. */}
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
