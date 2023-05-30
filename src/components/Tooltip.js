import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showTooltip && 
      <div className="tooltiptext">
        <h2>{text}</h2>
      </div>}
      {children}

      
    </div>
  );
};

export default Tooltip;
