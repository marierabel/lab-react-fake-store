import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchDetails() {
      console.log("itemId", itemId);
      const reponse = await fetch(
        `https://fakestoreapi.com/products/${itemId}`
      );
      const dataDetails = await reponse.json();
      setProduct(dataDetails);
    }
    fetchDetails();
  }, [itemId]);
  console.log(product);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <img src={product.image} alt="" />
      <p>Prix : {product.price}eur</p>
      <p>Description: {product.description}</p>
      <button className="btn-primary" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
