import React, { useState } from 'react';
import './SeeWhatsInside.css'; // Ensure your CSS file contains styles for these new elements

const SeeWhatsInside: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };


  const getImageSrc = (feature: string) => {
    const baseSrc: { [key: string]: string } = {
      'collage': 'Collage',
      'watermark': 'watermark',
      'size': 'Sizing'
    };

    return selectedFeature === feature ? `${baseSrc[feature]}_color.png` : `${baseSrc[feature]}.png`;
  };


  return (
    <div className="container">
      <div className="options">
        <div className="option" onClick={() => handleFeatureClick('collage')}>
          <img src={getImageSrc('collage')} alt="Collage" style={{ width: '80px', height: '80px' }} />
          <p style={{color: selectedFeature === 'collage' ? 'black' : 'gray'}}>Collage</p>
          {selectedFeature === 'collage' && <p>Description of Collage feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('watermark')}>
          <img src={getImageSrc('watermark')} alt="Watermark" style={{ width: '80px', height: '80px' }} />
          <p style={{color: selectedFeature === 'watermark' ? 'black' : 'gray'}}>Watermark</p>
          {selectedFeature === 'watermark' && <p>Description of Watermark feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('size')}>
          <img src={getImageSrc('size')} alt="Sizing" style={{ width: '60px', height: '60px', marginTop: '13px' }} />
          <p style={{color: selectedFeature === 'size' ? 'black' : 'gray'}}>Sizing</p>
          {selectedFeature === 'size' && <p>Description of Collage Size feature...</p>}
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
