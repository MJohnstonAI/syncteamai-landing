import Image from 'next/image';

// This function defines our Home page
export default function Home() {
  return (
    <>
      {/* This section adds global styles, like the background color */}
      <style jsx global>{`
        body {
          background-color: #0a0a0a;
          color: white;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Arial, sans-serif;
        }
      `}</style>
      
      {/* Main container for the whole page */}
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* The Hero Image acting as a background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/Robotteam.jpg"
            alt="A cinematic sci-fi image of three futuristic humanoid robots in a sleek, high-tech laboratory."
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>

        {/* The content container, layered on top of the background */}
        <div className="relative z-10 flex flex-col items-center p-8">
          
          <div className="absolute top-[-4rem] left-[-4rem]">
             <h1 className="text-2xl font-bold">SyncTeamAI</h1>
          </div>

          {/* The main headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Coming Soon: A Quantum Leap in AI Technology.
          </h2>

          {/* The email signup form */}
          <form className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-lg mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 bg-opacity-70 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 rounded-md px-8 py-3 text-lg font-semibold transition-colors"
            >
              Be the First to Witness It
            </button>
          </form>

        </div>
      </main>
    </>
  );
}
