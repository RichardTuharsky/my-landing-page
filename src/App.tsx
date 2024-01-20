import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Welcome to My Landing Page</h1>
        {/* Additional content here */}
      </div>
    </>
  );
}

export default App;
