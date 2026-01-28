import type { CardProps } from "../type/cardType";

const Card = ({ name, description, rating, image, price }: CardProps) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3>{name}</h3>
      <p className="rating">⭐ {rating}</p>
      <p>{description}</p>

      {price && <strong>Rs. {price}</strong>}
    </div>
  );
};

export default Card;


