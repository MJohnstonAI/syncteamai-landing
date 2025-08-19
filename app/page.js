"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // build a mailto link on demand
  const handleContact = (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      setMessage("Please enter your first name.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const to = "syncteamai@gmail.com";
    const subject = "Please contact me when the system is ready";
    const bodyLines = [
      `Hi SyncTeamAI team,`,
      ``,
      `Please add me to the waitlist and let me know when the system is ready.`,
      ``,
      `Name: ${firstName}`,
      `Email: ${email}`,
      ``,
      `Thanks!`,
    ];
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // open the user's default mail app
    window.location.href = mailto;

    // friendly on-page note
    setMessage(`Opening your email app… If it didn't open, click here: ${to}`);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black text-white">
      {/* Background image behind everything */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Robotteam.jpg"  // <-- capital R to match your file
          alt="Futuristic humanoid robots in a high-tech lab."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Brand */}
      <header className="absolute top-0 left-0 p-8 z-20">
        <div className="text-2xl font-bold">SyncTeamAI</div>
      </header>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center p-8 w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Coming Soon: A Quantum Leap in AI Technology.
        </h1>

        <form
          onSubmit={handleContact}
          className="flex flex-col md:flex-row gap-4 justify-center w-full mt-4"
          aria-describedby="form-status"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <label htmlFor="first-name" className="sr-only">First name</label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className="bg-gray-800/70 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
            />

            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="bg-gray-800/70 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-md px-8 py-3 text-lg font-semibold transition-colors"
          >
            Contact via Email
          </button>
        </form>

        {message && (
          <p id="form-status" className="mt-4 text-lg" role="status" aria-live="polite">
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-gray-300">
          We’ll only use your details to notify you about launch.
        </p>
      </div>
    </main>
  );
}
