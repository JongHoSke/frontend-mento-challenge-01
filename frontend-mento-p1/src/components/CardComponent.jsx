import "@css/card.css";
const CardComponent = ({ info }) => {
  console.log("info", info);
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
        <button className="card-toggle">toggle</button>
      </div>
    </div>
  );
};

export default CardComponent;
