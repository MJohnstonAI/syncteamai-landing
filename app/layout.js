import "./globals.css";

export const metadata = {
  title: "SyncTeamAI — Coming Soon",
  description: "Join the waitlist for SyncTeamAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
