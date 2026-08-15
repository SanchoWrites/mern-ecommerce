import React, { useState, useEffect } from 'react';
import './PcPartMenu.css';
import { PcPart } from '../PcPart/PcPart';

export const PcPartMenu = ({ activeCategory, onClose, all_product, onSelectPart }) => {
  const [displayCategory, setDisplayCategory] = useState(activeCategory);

  useEffect(() => {
    if (activeCategory) {
      setDisplayCategory(activeCategory);
    }
  }, [activeCategory]);

  const filteredProducts = all_product.filter(
    (product) => product.category === displayCategory
  );

  return (
    <div className={`pc-part-menu ${activeCategory ? 'open' : ''}`}>
      <div className="menu-header">
        <h3>Select {displayCategory && displayCategory.replace('-', ' ')}</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="menu-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((part) => (
            <PcPart 
              key={part.id} 
              part={part} 
              onSelect={() => onSelectPart(displayCategory, part)} 
            />
          ))
        ) : (
          <p className="no-products">No products available for this category.</p>
        )}
      </div>
    </div>
  );
};