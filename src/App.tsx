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
        background: '#BC5E45',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src="/my-landing-page/src/assets/logo.png" alt="Logo" style={{ width: '30px', height: '30px' }} />
      </div> 
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '100vh', 
        background: '#ff6600',
        paddingTop: '150px'  
      }}>
        <h1 style={{ 
          color: 'white', 
          fontFamily: 'sans-serif', 
          fontSize: '40px', 
          textAlign: "center", 
          marginBottom: '0px', // Reduced margin
          fontWeight: '1000', // Add fontWeight property
        }}>
          Effortlessly craft stunning collages in minutes.
        </h1>
          <p style={{ fontSize: '30px', color: "white", marginBottom: "40px", textAlign: "center" }}>Streamline the collage creation for seamless results and save <br /> hours of energy & headache!</p>
        {!subscribed ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  padding: '15px', // Increase padding
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: '400px', // Increase width
                  fontSize: '16px', // Increase font size
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  padding: '15px 30px', // Increase padding
                  background: '#33CC33',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  fontWeight: 'bold',
                  fontSize: '16px', // Increase font size
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        ) : (
          <p style={{color: "white", fontWeight: "bold"}}>Thank you for your subscription!</p>
        )}
      </div>
      <div style={{ 
        width: '100%', 
        height: '50px', 
        background: 'rgb(17,19,23)', // Change background color to light grey
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '14px',
      }}>
        <img src="/assets/logo.png" alt="Artfuly-Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <p style={{ fontSize: '13px', color: "grey", textAlign: "left" }}>2024 Artfuly. All rights reserved.</p>
      </div> 
    </>
  );
}

export default App;
