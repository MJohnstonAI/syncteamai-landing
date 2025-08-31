// This is the root layout file for your Next.js application.
// It wraps around your page components.

// 1. We import the global CSS file here to apply the styles to the entire app.
import './globals.css';

export const metadata = {
  title: 'Quantum Leap AI',
  description: 'For a Quantum Leap in AI Technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The body tag will now correctly have 100% height because of globals.css */}
      <body>{children}</body>
    </html>
  );
}
