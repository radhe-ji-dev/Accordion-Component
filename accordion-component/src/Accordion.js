import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <div>{title}</div>
      </div>
      <div className="toggle-btn" onClick={() => setIsActive(!isActive)}>
        {isActive ? "-" : "+"}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
