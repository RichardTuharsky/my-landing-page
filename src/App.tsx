import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Perform subscription logic here
    setSubscribed(true);
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#ff6600' }}>
        <h1 style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '30px', justifyContent: "center", textAlign: "center", marginBottom: "450px" }}>
          Effortlessly craft stunning Midjourney collages in minutes, save <br /> hours of energy & headache!
        </h1>
        {!subscribed ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: '300px',
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  padding: '10px 20px',
                  background: '#33CC33 ',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  fontWeight: 'bold', // Added fontWeight property to make the text bold
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        ) : (
          <p>Thank you for your subscription!</p>
        )}
      </div>
    </>
  );
}

export default App;
