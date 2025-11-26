import "@css/card.css";
import { useState } from "react";
const CardComponent = ({ info }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={info.logo} alt={info.name} />
        <div>
          <strong>{info.name}</strong>
          <span>{info.description}</span>
        </div>
      </div>
      <div className="card-btns">
        <button className="remove">Remove</button>
        <div className="toggle-container">
          <label className="toggle-wrapper">
            <input
              type="checkbox"
              checked={isToggleOn}
              onChange={() => setIsToggleOn(!isToggleOn)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
