import React, { useState, useEffect } from 'react';
import './SeeWhatsInside.css'; // Ensure your CSS file contains styles for these new elements

const SeeWhatsInside: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [typingState, setTypingState] = useState<{ [key: string]: string }>({});

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  const descriptions: { [key: string]: string } = {
    'collage': 'Craft collages as you like, in any size - be it 5x5, 3x5, 10x10, 30x30, or whatever suits your needs.',
    'watermark': 'Automatically apply a watermark across your collage to deter unauthorized copying.',
    'size': 'You can export   the collage in any resolution of your choice.',
  };

  const getImageSrc = (feature: string) => {
    const baseSrc: { [key: string]: string } = {
      'collage': 'collage',
      'watermark': 'watermark',
      'size': 'size'
    };

    return selectedFeature === feature ? `${baseSrc[feature]}_color.png` : `${baseSrc[feature]}.png`;
  };
  

  const typeText = (text: string) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypingState((prevState) => ({
          ...prevState,
          [selectedFeature as string]: text.substring(0, currentIndex + 1),
        }));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {
    handleFeatureClick('collage'); // Set the default selected feature to 'collage'
  }, []);

  useEffect(() => {
    if (selectedFeature) {
      setTypingState((prevState) => ({
        ...prevState,
        [selectedFeature as string]: '', // Initialize the typing state for the selected feature
      }));
      typeText(descriptions[selectedFeature]);
    }
  }, [selectedFeature]);


  const [popUp, setPopUp] = useState(true);

    useEffect(() => {
      // Set the pop-up effect to false after the animation ends
      const timer = setTimeout(() => {
        setPopUp(false);
      }, 10000); // Adjust the duration to match your animation

      return () => clearTimeout(timer);
    }, []);




  return (
    <div className="container">
      <div className="options">
        
      <div 
          className="option" 
          onClick={() => handleFeatureClick('collage')}
            style={
              selectedFeature === 'collage' 
                ? { boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                : {}
            }
          >
          <img 
            src={getImageSrc('collage')} 
            alt="Collage" 
            style={{ width: '150px', height: '150px' }} 
            className={popUp ? 'popUpEffect' : ''}
          />
          <p style={{ fontWeight: 'bold', color: selectedFeature === 'collage' ? 'black' : 'gray' }}>
            Collage
          </p>
          {selectedFeature === 'collage' && (
            <p style={{ fontFamily: 'cursive' }} className="typing-effect">
              {typingState['collage']} <span className="caret"></span>
            </p>
          )}
        </div>

        <div className="option"   onClick={() => handleFeatureClick('watermark')}
            style={
              selectedFeature === 'watermark' 
                ? { boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                : {}
            }
          >
          {/* Replace these placeholders with actual icons */}
          <img src={getImageSrc('watermark')} alt="Watermark" style={{ width: '150px', height: '150px'}} className={popUp ? 'popUpEffect' : ''}/>
          <p style={{ fontWeight: 'bold', color: selectedFeature === 'watermark' ? 'black' : 'gray' }}>Watermark</p>
          {selectedFeature === 'watermark' && (
            <p style={{fontFamily: 'cursive' }} className="typing-effect">{typingState['watermark']}</p>
          )}
        </div>

        <div className="option" onClick={() => handleFeatureClick('size')}
            style={
              selectedFeature === 'size' 
                ? { boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                : {}
            }
          >
          {/* Replace these placeholders with actual icons */}
          <img src={getImageSrc('size')} alt="Sizing" style={{ width: '110px', height: '110px', marginTop: '23px', marginBottom: '18px' }} className= {popUp ? 'popUpEffect' : ''} />
          <p style={{ fontWeight: 'bold', color: selectedFeature === 'size' ? 'black' : 'gray' }}>Sizing</p>
          {selectedFeature === 'size' && (
            <p style={{fontFamily: 'cursive' }} className="typing-effect">{typingState['size']}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
