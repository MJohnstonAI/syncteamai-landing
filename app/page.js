"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

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
      "Hi SyncTeamAI team,",
      "",
      "Please add me to the waitlist and let me know when the system is ready.",
      "",
      `Name: ${firstName}`,
      `Email: ${email}`,
      "",
      "Thanks!",
    ];
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailto;
    setMailtoHref(mailto);
    setMessage("Opening your email app… If it didn't open, tap the link below.");
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Top panel: Hero image */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/Robotteam.jpg" // capital R
          alt="Futuristic humanoid robots in a high-tech lab."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Coming Soon: A Quantum Leap in AI Technology.
          </h1>
          <p className="text-lg text-gray-200">
            Be the first to know when we launch.
          </p>
        </div>
      </section>

      {/* Bottom panel: Waitlist form */}
      <section className="w-full bg-gray-900 flex justify-center py-12 px-4">
        <div className="w-full max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-6">Join the Waitlist</h2>

          <form
            onSubmit={handleContact}
            className="flex flex-col md:flex-row gap-4 justify-center w-full"
            aria-describedby="form-status"
          >
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
            />

            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              inputMode="email"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 rounded-md px-8 py-3 text-lg font-semibold transition-colors"
            >
              Contact via Email
            </button>
          </form>

          {(message || mailtoHref) && (
            <div id="form-status" className="mt-4 text-lg" role="status" aria-live="polite">
              {message && <p>{message}</p>}
              {mailtoHref && (
                <p className="mt-2">
                  <a href={mailtoHref} className="underline">
                    Open email
                  </a>
                </p>
              )}
            </div>
          )}

          <p className="mt-6 text-sm text-gray-400">
            We’ll only use your details to notify you about launch.
          </p>
        </div>
      </section>
    </main>
  );
}
