import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = {
    id,
    name: `Product ${id}`,
    price: 29.99 + Number(id) * 10,
    description: `This is the description for product ${id}.`,
    image: `/img/product${id}.jpg`,
  };

  return (
    <>
      <Header />
      <main>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
