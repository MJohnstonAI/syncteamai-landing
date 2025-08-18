import Image from 'next/image';
import heroImage from '../public/Robotteam.jpg'; // We will upload the image here

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          height: 100%;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Arial, 'Helvetica Neue';
          color: #fff;
          background-color: #0b1020; /* Dark background */
        }
      `}</style>
      <main style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}>
          <Image
            src={heroImage}
            alt="AI Council"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}></div>
        </div>

        <div style={{ zIndex: 1 }}>
          <h1 style={{
            fontWeight: 800,
            lineHeight: 1.1,
            fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
            margin: '0 0 1rem'
          }}>
            Coming Soon: A Quantum Leap in AI Technology.
          </h1>
          <div style={{
            display: 'inline-flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                padding: '0.9rem 1rem',
                borderRadius: '10px',
                minWidth: '18rem'
              }}
            />
            <button style={{
              border: 0,
              borderRadius: '10px',
              padding: '0.9rem 1.2rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: '#2563eb',
              color: '#fff'
            }}>
              Be the First to Witness It
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
