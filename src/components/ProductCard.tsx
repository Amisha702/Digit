
import type { CardProps } from "../type/cardType";

const data = {
  name: "Sample Product",
  price: 29.99,
  rating: 4.5,
  image: "https://via.placeholder.com/150",
}

export const ProductCard = (data: CardProps) => {
  const { name, price, rating, image } = data;
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






