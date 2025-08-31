"use client";

import { useState } from "react";

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
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* TOP PANEL — image-only hero */}
      <section
        aria-label="Hero image"
        style={{
          height: "65vh",
          width: "100%",
          backgroundImage: "url('/RobotTeam.jpg')", // Ensure file is in /public/RobotTeam.jpg at project root
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Top-centered heading over the image */}
        <h1
          style={{
            position: "absolute",
            top: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
            padding: "0.25rem 0.75rem",
            fontSize: "clamp(1.125rem, 2.5vw + 0.5rem, 2rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.35)",
            borderRadius: "0.375rem",
            zIndex: 2,
          }}
        >
          Join the launch of an exciting new product in AI technology
        </h1>
      </section>

      {/* BOTTOM PANEL — form footer */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#111827", // gray-900
          borderTop: "1px solid #1f2937", // gray-800
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: "42rem", // ~max-w-2xl
            padding: "2.5rem 1rem", // py-10 px-4
            textAlign: "center",
          }}
        >
          <form
            onSubmit={handleContact}
            aria-describedby="form-status"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <label htmlFor="first-name" className="sr-only">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              required
              style={{
                backgroundColor: "#1f2937", // gray-800
                border: "1px solid #374151", // gray-700
                borderRadius: "0.375rem",
                padding: "0.75rem 1rem",
                fontSize: "1.125rem",
                color: "#fff",
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              autoComplete="email"
              inputMode="email"
              required
              style={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "0.375rem",
                padding: "0.75rem 1rem",
                fontSize: "1.125rem",
                color: "#fff",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#2563eb", // blue-600
                borderRadius: "0.375rem",
                padding: "0.75rem 2rem",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")} // blue-700
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            >
              Contact via Email
            </button>
          </form>

          {(message || mailtoHref) && (
            <div id="form-status" role="status" aria-live="polite" style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
              {message && <p>{message}</p>}
              {mailtoHref && (
                <p style={{ marginTop: "0.5rem" }}>
                  <a href={mailtoHref} style={{ textDecoration: "underline", color: "#fff" }}>
                    Open email
                  </a>
                </p>
              )}
            </div>
          )}

          <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "#9ca3af" }}>
            We’ll only use your details to notify you about launch.
          </p>
        </div>
      </footer>
    </main>
  );
}
