const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h1>Shop Smarter 🛍️</h1>
          <p>Best products. Best prices. Fast delivery.</p>
          <button>Shop Now</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1606813902914-3d7dbdfb36f9"
          alt="shopping"
        />
      </div>

    <h2 className="section-title">Categories</h2>

      <div className="categories">
      <div className="category">📱 Electronics</div>
      <div className="category">👕 Fashion</div>
      <div className="category">🎧 Accessories</div>
         </div>


      {/* Featured Products */}
      <h2 className="section-title">Featured Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
          <h4>Smart Watch</h4>
          <p>$120</p>
          <button>Add to Cart</button>
          <p>⭐⭐⭐⭐☆</p>
          <button className="cart-btn">Add to Cart</button>

        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1512499617640-c2f999098c01" />
          <h4>Headphones</h4>
          <p>$80</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1585386959984-a41552262b64" />
          <h4>Camera</h4>
          <p>$560</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
