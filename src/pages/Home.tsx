import ProductCard from "../components/ProductCard";
import { Productdetails } from "../data/product_data";

const Home = () => {
  return (
    <div>
      <h2>Featured Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {Productdetails.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;



