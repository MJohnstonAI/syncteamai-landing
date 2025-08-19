import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || "false") === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Simple in-memory rate-limit (swap for Redis if you need persistence)
const ipHits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const rec = ipHits.get(ip);
  if (!rec || now - rec.ts > 60_000) {
    ipHits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  rec.ts = now;
  return rec.count > 20; // >20 requests/min per IP
}

export async function POST(req) {
  try {
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";

    if (tooMany(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    const { firstName, email, company } = await req.json();

    // Honeypot (ignore bots quietly)
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const adminTo = process.env.ADMIN_EMAIL || "syncteamai@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "no-reply@syncteamai.com";
    const nowIso = new Date().toISOString();

    // 1) Send notification to you
    await transporter.sendMail({
      from: fromEmail,
      to: adminTo,
      subject: "New waitlist signup",
      text: `First name: ${firstName}\nEmail: ${email}\nTime: ${nowIso}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;font-size:16px">
          <p><strong>New waitlist signup</strong></p>
          <p><b>First name:</b> ${firstName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><small>${nowIso}</small></p>
        </div>
      `,
    });

    // 2) Send thank-you to subscriber
    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: "Thanks for joining the SyncTeamAI waitlist",
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;font-size:16px;line-height:1.5">
          <p>Hi ${firstName},</p>
          <p>Thank you for taking an interest in our great new development. We’ll notify you as soon as the system is ready.</p>
          <p>— The SyncTeamAI Team</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send emails." },
      { status: 500 }
    );
  }
}
