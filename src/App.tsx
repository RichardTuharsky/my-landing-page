import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import SeeWhatsInside from './components/SeeWhatsInside';



function App() {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleSubscribe = (): void => {
    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (!email.includes('@')) {
      setEmailError('Please enter a valid email');
      return;
    }

    setSubscribed(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      console.log('Sending email:', email);
      if (response.ok) {
        setIsSubmitted(true);
      }
      const data = await response.json();
      console.log('Success:', data);
      // Handle success (e.g., showing a thank you message or alert)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <GlobalStyles />
      <div style={{ 
        width: '100%', 
        height: '50px', 
        background: 'rgb(17,19,23)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src="/logo.png" alt="Logo" style={{ width: '30px', height: '30px' }} />
      </div> 
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '100vh', 
        background: '#ff6600',
        paddingTop: '80px'  
      }}>
  
        <h1 style={{ 
          color: 'white', 
          fontFamily: 'sans-serif', 
          fontSize: '40px', 
          textAlign: "center", 
          marginBottom: '10px', // Reduced margin
          fontWeight: '1000', // Add fontWeight property
        }}>
          Effortlessly craft stunning collages in minutes.
        </h1>
          <p style={{ fontSize: '30px', color: "white", marginBottom: "60px", textAlign: "center" }}>Streamline the collage creation for seamless results and save <br /> hours of energy & headache!</p>
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
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // Add box shadow
                  transition: 'box-shadow 0.3s ease', // Add transition for hover effect
                }}
                // Add hover style
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
                }}
              >
                Subscribe
              </button>
                
            </div>
              <h1 style={{ fontSize: "40px", marginBottom: "0px", marginTop: "70px", color: "white", fontFamily: 'sans-serif' }}>Explore the contents</h1>
          </div>
        ) : (
          <p style={{color: "white", fontWeight: "bold"}}>Thank you for your subscription!</p>
          )}
          <SeeWhatsInside />
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
        <img src="/logo.png" alt="Artfuly-Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <p style={{ fontSize: '13px', color: "grey", textAlign: "left" }}>2024 Artfuly. All rights reserved.</p>
      </div> 
      
    </>
    
  );
}

export default App;
