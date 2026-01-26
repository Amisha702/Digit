import type { CardProps } from "../type/cardType";



const Card = ({ name, description, rating, image, price, onClick }:CardProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      {price && <strong>Rs. {price}</strong>}
    </div>
  );
};

export default Card;
