import React from 'react';
import './SeeWhatsInside.css'; // Ensure your CSS file contains styles for these new elements

const SeeWhatsInside: React.FC = () => {
  return (
    <div className="container">
      {/* <h2 className="heading">See What's Inside</h2>
      <p className="text">Explore our features and discover the tools and techniques to enhance your online marketing strategies.</p> */}
      
      <div className="options">
        <div className="option">
          <h3>Collage</h3>
          <p>Description of Collage feature...</p>
          <button className="button">Explore Collage</button>
        </div>

        <div className="option">
          <h3>Watermark</h3>
          <p>Description of Watermark feature...</p>
          <button className="button">Explore Watermark</button>
        </div>

        <div className="option">
          <h3>Size of the Collage</h3>
          <p>Description of Collage Size feature...</p>
          <button className="button">Explore Sizes</button>
        </div>
      </div>
    </div>
  );
};

export default SeeWhatsInside;
