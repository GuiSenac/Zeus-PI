
import Link from 'next/link';

const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="product-card">
      <Link href={`/product/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
