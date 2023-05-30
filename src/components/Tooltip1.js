import React, { useState } from 'react';

const Tooltip1 = ({ text1, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="tooltip tooltiptext"><h2>{text1}</h2></div>}
    </div>
  );
};

export default Tooltip1;
