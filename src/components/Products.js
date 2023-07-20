import { useEffect, useState } from "react";
import Cards from "./Cards";
import Button from "./Button";
function Products() {
  const productApi = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const getProducts = () => {
    fetch(productApi)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategory = () => {
    fetch(`${productApi}/categories`)
      .then((res) => res.json())
      .then((category) => setCategory(category));
  };
  const getProductsCategory = (categoryName) => {
    fetch(`${productApi}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategory();
  }, []);
  const product = products.map((product) => {
    return (
      <Cards
        key={product.id}
        product={product}
        showRate={true}
        showLink={true}
      />
    );
  });
  return (
    <>
      <div className="categories">
        <Button name="All" action={() => getProducts()} />
        {category.map((category) => (
          <Button
            key={category}
            name={category}
            action={() => getProductsCategory(category)}
          />
        ))}
      </div>
      <div className="cards-container">{product}</div>
    </>
  );
}
export default Products;
