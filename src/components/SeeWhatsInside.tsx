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
          <h3>Collage</h3>
          {/* Replace these placeholders with actual icons */}
          <div className="icon-placeholder">Icon 1</div>
          {selectedFeature === 'collage' && <p>Description of Collage feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('watermark')}>
          <h3>Watermark</h3>
          {/* Replace these placeholders with actual icons */}
          <div className="icon-placeholder">Icon 2</div>
          {selectedFeature === 'watermark' && <p>Description of Watermark feature...</p>}
        </div>

        <div className="option" onClick={() => handleFeatureClick('size')}>
          <h3>Size of the Collage</h3>
          {/* Replace these placeholders with actual icons */}
          <div className="icon-placeholder">Icon 3</div>
          {selectedFeature === 'size' && <p>Description of Collage Size feature...</p>}
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
