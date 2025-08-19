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
      setMailtoHref("");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setMessage("Please enter a valid email address.");
      setMailtoHref("");
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

    // Open the user’s email app
    window.location.href = mailto;

    // Clickable fallback + status
    setMailtoHref(mailto);
    setMessage("Opening your email app… If it didn't open, tap the link below.");
  };

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Top panel: image-only hero (fills remaining height; min ~65vh) */}
      <section className="relative flex-1 min-h-[65vh] w-full">
        <Image
          src="/Robotteam.jpg"  // Capital R to match your file name
          alt="Futuristic humanoid robots in a high-tech lab."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Bottom panel: dedicated footer container with the form */}
      <footer className="w-full bg-gray-900 border-t border-gray-800">
        <div className="mx-auto w-full max-w-2xl px-4 py-10">
          <form
            onSubmit={handleContact}
            className="flex flex-col md:flex-row gap-4 justify-center w-full"
            aria-describedby="form-status"
          >
            <label htmlFor="first-name" className="sr-only">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
            />

            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
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
            <div id="form-status" className="mt-4 text-lg text-center" role="status" aria-live="polite">
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

          <p className="mt-6 text-sm text-gray-400 text-center">
            We’ll only use your details to notify you about launch.
          </p>
        </div>
      </footer>
    </main>
  );
}
