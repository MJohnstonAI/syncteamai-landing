import Link from 'next/link';

export default function LandingPage() {
  return (
    <main
      className="relative flex h-screen w-full flex-col items-center bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/RobotTeam.jpg')" }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Header Content */}
      <div className="relative z-10 w-full pt-10 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          For a Quantum Leap in AI Technology
        </h1>
      </div>



      {/* Footer */}
      <footer className="absolute bottom-4 z-10 w-full text-center text-xs text-gray-400">
        © 2025 NeuroSync AI Dynamics (Pty) Ltd. All Rights Reserved. | Version 1.1
      </footer>
    </main>
  );
}
