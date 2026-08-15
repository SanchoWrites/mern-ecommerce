import React from 'react';
import './Configuration.css';
import { PartSelector } from '../PartSelector/PartSelector';

export const Configuration = ({ selectedParts, onOpenMenu }) => {
  return (
    <div className="configuration-container">
      <h2>My configuration</h2>
      <hr />

      <div className="config-section">
        <h3>Basic components</h3>
        <p>The basic components are essential for a functional assembly.</p>
        <div className="part-list">
          <PartSelector title="Motherboard" category="motherboard" selectedPart={selectedParts['motherboard']} onOpenMenu={onOpenMenu} />
          <PartSelector title="CPU" category="cpu" selectedPart={selectedParts['cpu']} onOpenMenu={onOpenMenu} />
          <PartSelector title="RAM" category="ram" selectedPart={selectedParts['ram']} onOpenMenu={onOpenMenu} />
          <PartSelector title="Case" category="case" selectedPart={selectedParts['case']} onOpenMenu={onOpenMenu} />
          <PartSelector title="Liquid Cooler" category="liquid-cooler" selectedPart={selectedParts['liquid-cooler']} onOpenMenu={onOpenMenu} />
          <PartSelector title="CPU Cooler" category="cpu-cooler" selectedPart={selectedParts['cpu-cooler']} onOpenMenu={onOpenMenu} />
          <PartSelector title="PSU" category="psu" selectedPart={selectedParts['psu']} onOpenMenu={onOpenMenu} />
        </div>
      </div>

      <div className="config-section">
        <h3>GPU</h3>
        <p>Graphics cards are an essential component if you're going to play video games or are looking for better performance in design, image and video editing.</p>
        <div className="part-list">
          <PartSelector title="Graphics Card" category="gpu" selectedPart={selectedParts['gpu']} onOpenMenu={onOpenMenu} />
        </div>
      </div>

      <div className="config-section">
        <h3>Storage</h3>
        <p>Adding a hard drive to your setup is essential to be able to store all the content possible on your computer: photos, videos, video games, etc.</p>
        <div className="part-list">
          <PartSelector title="Hard Drive" category="hard-drive" selectedPart={selectedParts['hard-drive']} onOpenMenu={onOpenMenu} />
        </div>
      </div>

      <div className="config-section">
        <h3>Software</h3>
        <p>Add the necessary software for your setup.</p>
        <div className="part-list">
          <PartSelector title="Operating System" category="software" selectedPart={selectedParts['software']} onOpenMenu={onOpenMenu} />
        </div>
      </div>

      <div className="config-section">
        <h3>Other components</h3>
        <div className="part-list">
          <PartSelector title="Sound Card" category="sound" selectedPart={selectedParts['sound']} onOpenMenu={onOpenMenu} />
          <PartSelector title="Additional Cooling" category="additional-cooling" selectedPart={selectedParts['additional-cooling']} onOpenMenu={onOpenMenu} />
          <PartSelector title="Wi-fi Adapter" category="wifi" selectedPart={selectedParts['wifi']} onOpenMenu={onOpenMenu} />
        </div>
      </div>
    </div>
  );
};