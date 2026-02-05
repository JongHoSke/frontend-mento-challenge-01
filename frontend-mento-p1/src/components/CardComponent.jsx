import "@css/card.css";
import { useState } from "react";
const CardComponent = ({ info, handleCardActive, handelCardRemove }) => {
  const [isToggle, setIsToggle] = useState(info.isActive);
  const handleOnChange = () => {
    setIsToggle(!isToggle);
    handleCardActive(info.id);
  };
  return (
    <article className="card-container">
      <div className="card-content">
        <img src={info.logo} alt={info.name} />
        <div>
          <strong>{info.name}</strong>
          <span>{info.description}</span>
        </div>
      </div>
      <div className="card-btns">
        <button className="remove" onClick={() => handelCardRemove(info.id)}>
          Remove
        </button>
        <div className="toggle-container">
          <label className="toggle-wrapper">
            <input
              type="checkbox"
              checked={isToggle}
              onChange={handleOnChange}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </article>
  );
};

export default CardComponent;
