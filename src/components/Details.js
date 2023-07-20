import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";

function Details() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);
  return (
    <>
      <div className="details-container">
        <Cards product={product} showDes={true} showBack={true} />
      </div>
    </>
  );
}

export default Details;
