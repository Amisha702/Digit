type ProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, title, price, image }: ProductProps) => {
  const handleClick = () => {
    console.log("Clicked product id:", id);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;




