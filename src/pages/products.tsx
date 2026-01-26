
import Card from "../components/Card";
import {products} from "../data/product_data";

const Products = () => {
  return (
    <div className="products">
      {products.map((item) => (
        <Card
          key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            image={item.image}
            description={item.description|| "des"}
        />
      ))}
    </div>
  );
};

export default Products;
