import { ProductCard } from "../components/ProductCard";
import { products } from "../data/product_data";

const Home = () => {
  return (
    <div className="container">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;





