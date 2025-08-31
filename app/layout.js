// This file is the main layout for your application.
// Its primary role here is to import and apply the global CSS.

import './globals.css';

export const metadata = {
  title: 'Quantum Leap AI',
  description: 'For a Quantum Leap in AI Technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* This body tag will now correctly fill the browser's height 
        because of the rules you placed in `globals.css`. 
        The `children` prop represents any page that gets rendered, 
        like your `page.js` component.
      */}
      <body>{children}</body>
    </html>
  );
}
