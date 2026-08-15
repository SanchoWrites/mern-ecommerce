import React from 'react';
import './PartSelector.css';

import wifi_icon from '../Assets/wifi.png';
import sound_icon from '../Assets/sound.png';
import software_icon from '../Assets/software.png';
import hard_drive_icon from '../Assets/hard-drive.png';
import gpu_icon from '../Assets/gpu.png';
import psu_icon from '../Assets/psu.png';
import cooling_icon from '../Assets/cooling.png';
import case_icon from '../Assets/case.png';
import ram_icon from '../Assets/ram.png';
import motherboard_icon from '../Assets/motherboard.png';
import cpu_icon from '../Assets/cpu.png';

export const PartSelector = ({ title, category, selectedPart, onOpenMenu }) => {

  const getCategoryIcon = (categoryType) => {
    switch (categoryType) {
      case 'wifi': return wifi_icon;
      case 'sound': return sound_icon;
      case 'software': return software_icon;
      case 'hard-drive': return hard_drive_icon;
      case 'gpu': return gpu_icon;
      case 'psu': return psu_icon;
      case 'liquid-cooler':
      case 'cpu-cooler':
      case 'additional-cooling': 
        return cooling_icon;
      case 'case': return case_icon;
      case 'ram': return ram_icon;
      case 'motherboard': return motherboard_icon;
      case 'cpu': return cpu_icon;
      default: return null; 
    }
  };

  return (
    <div className="part-selector" onClick={() => onOpenMenu(category)}>
      <div className="part-info-left">
        <div className="part-image-placeholder">
          {selectedPart ? (
            <img src={selectedPart.image} alt={selectedPart.name} className="selected-part-image" />
          ) : (
            <img 
              src={getCategoryIcon(category)} 
              alt={`${title} placeholder icon`} 
              className="category-icon" 
            />
          )}
        </div>
        <div className="part-text">
          <span className="part-type">{title}</span>
          {selectedPart && <span className="part-exact-name">{selectedPart.name}</span>}
        </div>
      </div>
      
      <div className="part-info-right">
        {selectedPart ? (
          <div className="part-prices">
            <span className="new-price">${selectedPart.new_price.toFixed(2)}</span>
            {selectedPart.old_price && (
              <span className="old-price">${selectedPart.old_price.toFixed(2)}</span>
            )}
          </div>
        ) : (
          <span className="select-text">Select</span>
        )}
      </div>
    </div>
  );
};