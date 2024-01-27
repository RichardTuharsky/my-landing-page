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
    'size': 'You can export the collage in any resolution of your choice.',
  };

  const getImageSrc = (feature: string) => {
    const baseSrc: { [key: string]: string } = {
      'collage': 'Collage',
      'watermark': 'watermark',
      'size': 'Sizing'
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
        <div className="option" onClick={() => handleFeatureClick('collage')}>
          {/* Replace these placeholders with actual icons */}
          <img src={getImageSrc('collage')} alt="Collage" style={{ width: '80px', height: '80px' }} className={popUp ? 'popUpEffect' : ''} />
          <p style={{ color: selectedFeature === 'collage' ? 'black' : 'gray' }}>Collage</p>
          {/* {selectedFeature === 'collage' && (
            <p className="typing-effect">{typingState['collage']}</p>
            
          )} */}
          <p>Craft collages as you like, in any size - be it 5x5, 3x5, 10x10, 30x30, or whatever suits your needs.</p>
        </div>

        <div className="option" onClick={() => handleFeatureClick('watermark')}>
          {/* Replace these placeholders with actual icons */}
          <img src={getImageSrc('watermark')} alt="Watermark" style={{ width: '80px', height: '80px' }} className={popUp ? 'popUpEffect' : ''}/>
          <p style={{ color: selectedFeature === 'watermark' ? 'black' : 'gray' }}>Watermark</p>
          {selectedFeature === 'watermark' && (
            <p className="typing-effect">{typingState['watermark']}</p>
          )}
        </div>

        <div className="option" onClick={() => handleFeatureClick('size')}>
          {/* Replace these placeholders with actual icons */}
          <img src={getImageSrc('size')} alt="Sizing" style={{ width: '60px', height: '60px', marginTop: '13px' }} className= {popUp ? 'popUpEffect' : ''} />
          <p style={{ color: selectedFeature === 'size' ? 'black' : 'gray' }}>Sizing</p>
          {selectedFeature === 'size' && (
            <p className="typing-effect">{typingState['size']}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
