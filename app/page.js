export default function Home() {
  return (
    // This `main` element will now correctly fill the screen's height
    // because the `globals.css` file has set `<html>` and `<body>` to be 100% height.
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION
        This section acts as the main container for your page content.
        - `h-screen`: Makes the section take up the full height of the viewport.
        - `w-full`: Makes the section take up the full width.
        - `bg-cover bg-center`: Ensures your background image covers the entire area
          without distortion, centered nicely.
        - `style`: Sets the background image. Make sure `RobotTeam.jpg` is in your `/public` folder.
      */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/RobotTeam.jpg')" }}
        aria-label="A team of robots working on advanced technology"
      >
        {/* Semi-transparent overlay to make the text more readable against the background */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT CONTAINER
          This is the key to the corrected layout.
          - `relative z-10`: Puts this container on top of the overlay.
          - `flex flex-col h-full w-full`: Makes it a full-height and full-width flex container with a vertical layout.
          - `items-center`: Centers the header and form horizontally.
          - `justify-between`: Pushes the header to the top and the form to the bottom.
        */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between p-8 md:p-12">
          {/* TOP-CENTERED HEADING */}
          <h1
            className="
              max-w-4xl text-center font-extrabold tracking-tight 
              rounded-xl border border-white/15 bg-black/40 backdrop-blur 
              px-6 py-3 shadow-lg text-[clamp(1.8rem,3vw+1rem,3.5rem)]
            "
          >
            For a Quantum Leap in AI Technology
          </h1>

          {/* CENTERED FOOTER CONTACT FORM */}
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

