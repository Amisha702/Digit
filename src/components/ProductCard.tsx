
import type { CardProps } from "../type/cardType";

const ProductCard = ({ name, price, rating, image }: CardProps) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p className="price">${price}</p>
      <p className="rating">⭐ {rating}</p>

      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;
0





