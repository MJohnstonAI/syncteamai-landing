"use client"; // This line is important - it makes the form interactive

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Subscribing...');

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(`Success! Thank you for joining.`);
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } else {
      setMessage(`Error: ${result.error}`);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background image and overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Robotteam.jpg"
          alt="A cinematic sci-fi image of three futuristic humanoid robots in a sleek, high-tech laboratory."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header with brand name */}
      <header className="absolute top-0 left-0 p-8 z-20"> {/* <--- THIS IS THE CORRECTED LINE */}
        <div className="text-2xl font-bold">SyncTeamAI</div>
      </header>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center p-8">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Coming Soon: A Quantum Leap in AI Technology.
        </h1>

        {/* Email signup form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-lg mt-4">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="bg-gray-800/70 border border-gray-700 rounded-md px-4 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-md px-8 py-3 text-lg font-semibold transition-colors"
          >
            Be the First to Witness It
          </button>
        </form>
        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    </main>
  );
}
