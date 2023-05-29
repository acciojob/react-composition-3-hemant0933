import React,{useState} from 'react';

const Tooltip2 = ({text2,children}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };
  
    const handleMouseLeave = () => {
      setShowTooltip(false);
    };
  return (
    <div className="tooltip2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {children}
    {showTooltip && <div className="tooltiptext">{text2}</div>}
  </div>
  );
}

export default Tooltip2;
