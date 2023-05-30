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
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {children}
    {showTooltip && <div className="tooltip tooltiptext"><p>{text2}</p></div>}
  </div>
  );
}

export default Tooltip2;
