import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";
// opcjonalnie, jeśli masz typ AppDispatch:
// import type { AppDispatch } from "../store";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({id, image, title, price, description, }: ProductProps) {
  const dispatch = useDispatch(); // albo useDispatch<AppDispatch>()

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
