import React from 'react';
import './PcPart.css';

export const PcPart = ({ part, onSelect }) => {
  return (
    <div className="pc-part-item" onClick={onSelect}>
      <img src={part.image} alt={part.name} className="pc-part-img" />
      <div className="pc-part-details">
        <p className="pc-part-name">{part.name}</p>
        <div className="pc-part-pricing">
          <span className="pc-part-new-price">${part.new_price.toFixed(2)}</span>
          {part.old_price && (
            <span className="pc-part-old-price">${part.old_price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};