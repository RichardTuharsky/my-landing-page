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
      <div style={{ 
        width: '100%', 
        height: '50px', 
        background: '#33CC33' // Change background color to light grey
      }}></div> 
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '100vh', 
        background: '#ff6600',
        paddingTop: '150px'  // Add padding at the top
      }}>
        <h1 style={{ 
          color: 'white', 
          fontFamily: 'sans-serif', 
          fontSize: '40px', 
          textAlign: "center", 
          marginBottom: '0px', // Reduced margin
          fontWeight: '1000', // Add fontWeight property
        }}>
          Effortlessly craft stunning Midjourney collages in minutes, save <br /> hours of energy & headache!
        </h1>
          <p style={{ fontSize: '30px', color: "white", marginBottom: "40px", textAlign: "center" }}>Streamline the collage creation for seamless results.</p>
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
                    background: '#33CC33',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    fontWeight: 'bold', // Add fontWeight property
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
