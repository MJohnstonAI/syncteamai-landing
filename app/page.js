"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  // simple honeypot — hidden field to deter bots
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (company) return; // bot filled the hidden field

    if (!firstName.trim()) {
      setMessage("Please enter your first name.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setBusy(true);
    setMessage("Sending...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          company, // honeypot (server ignores if non-empty)
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Hi ${firstName.trim()}, thanks for your interest! Check your inbox.`);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1200);
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black text-white">
      {/* Background: keep behind with -z-10 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Robotteam.jpg"  // <-- capital R must match your file name
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
          onSubmit={handleSubmit}
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

          {/* Honeypot (hidden visually) */}
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={busy}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-md px-8 py-3 text-lg font-semibold transition-colors"
          >
            {busy ? "Saving..." : "Join the Waitlist"}
          </button>
        </form>

        {message && (
          <p id="form-status" className="mt-4 text-lg" role="status" aria-live="polite">
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-gray-300">
          We’ll only use your email to notify you about launch.
        </p>
      </div>
    </main>
  );
}
