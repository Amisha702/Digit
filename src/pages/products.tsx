import ProductCard from "../components/ProductCard";
import products from "../data/product_data";

const Home = () => {
  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Home;
