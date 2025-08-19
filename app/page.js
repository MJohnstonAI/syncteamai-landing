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
      `Hi SyncTeamAI team,`,
      ``,
      `Please add me to the waitlist and let me know when the system is ready.`,
      ``,
      `Name: ${firstName}`,
      `Email: ${email}`,
      ``,
      `Thanks!`,
    ];
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    // Launch the user's mail app
    window.location.href = mailto;

    // Store & show a clickable fallback
    setMailtoHref(mailto);
    setMessage("Opening your email app… If it didn't open, tap the link below.");
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black text-white">
      {/* Background image behind everything */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Robotteam.jpg" // capital R to match your file
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
          Coming Soon: A Quantum Lea
