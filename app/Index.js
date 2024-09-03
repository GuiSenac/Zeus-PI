
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/img/product1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: '/img/product2.jpg' },
    { id: 3, name: 'Product 3', price: 49.99, image: '/img/product3.jpg' },
  ];

  return (
    <>
      <Header />
      <main>
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
