import React, { useState, useContext } from 'react';
import './CSS/PcBuilder.css';
import { ShopContext } from '../Context/ShopContext';
import { Configuration } from '../Components/Configuration/Configuration';
import { PurchaseBox } from '../Components/PurchaseBox/PurchaseBox';
import { PcPartMenu } from '../Components/PcPartMenu/PcPartMenu';

export const PcBuilder = () => {
  const { 
    all_product, 
    selectedParts, 
    setSelectedParts, 
    isAssembled, 
    setIsAssembled 
  } = useContext(ShopContext);
  
  const [activeCategory, setActiveCategory] = useState(null);

  const handleOpenMenu = (category) => {
    setActiveCategory(category);
  };

  const handleCloseMenu = () => {
    setActiveCategory(null);
  };

  const handleSelectPart = (category, part) => {
    setSelectedParts((prev) => ({
      ...prev,
      [category]: part,
    }));
    handleCloseMenu();
  };

  return (
    <div className="pc-builder-page">
      <div className="pc-builder-main">
        <Configuration 
          selectedParts={selectedParts} 
          onOpenMenu={handleOpenMenu} 
        />
        <PurchaseBox 
          selectedParts={selectedParts}
          isAssembled={isAssembled}
          setIsAssembled={setIsAssembled}
        />
      </div>

      <PcPartMenu 
        activeCategory={activeCategory} 
        onClose={handleCloseMenu} 
        all_product={all_product}
        onSelectPart={handleSelectPart}
      />
    </div>
  );
};