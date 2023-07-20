import { Link } from "react-router-dom";

function Cards(props) {
  const { product, showDes, showRate, showBack, showLink } = props;
  let star = "⭐";
  return (
    <div className="card">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      {showDes && <p>{product.description}</p>}
      <span className="price">Price : {product.price}$</span>
      {showRate && (
        <div className="rating">
          <span className="rate">
            {product.rating.rate}
            {star.repeat(Math.floor(product.rating.rate))}
          </span>
          <span className="count">{product.rating.count}</span>
        </div>
      )}
      {showLink && <Link to={`/product/${product.id}`}>Details</Link>}
      {showBack && <Link to="/">Back</Link>}
    </div>
  );
}

export default Cards;
