import React, { useState } from 'react';
import './SeeWhatsInside.css'; // Ensure your CSS file contains styles for these new elements

const SeeWhatsInside: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="container">
      <div className="options">
        <div className="option" onClick={() => handleFeatureClick('collage')}>
          {/* Replace these placeholders with actual icons */}
          <img src="Collage.png" alt="Collage" style={{ width: '80px', height: '80px'}} />
          <p style={{color: 'gray'}}>Collage</p>
          {selectedFeature === 'collage' && <p>Description of Collage feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('watermark')}>
          {/* Replace these placeholders with actual icons */}
          <img src="watermark.png" alt="Watermark" style={{ width: '80px', height: '80px'}}/>
          <p style={{color: 'gray'}}>Watermark</p>
          {selectedFeature === 'watermark' && <p>Description of Watermark feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('size')}>
          {/* Replace these placeholders with actual icons */}
          <img src="Sizing.png" alt="Sizing"style={{ width: '60px', height: '60px', marginTop: '13px'}}/>
          <p style={{color: 'gray'}}>Sizing</p>
          {selectedFeature === 'size' && <p>Description of Collage Size feature...</p>}
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
