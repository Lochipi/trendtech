import Card from "../components/Card";
import { ProductsStyled } from "./styles/Products.styled";

function Products() {
  return (
    <ProductsStyled>
      <h1>All Products</h1>
      <div className="products--container">
        <Card />
        <hr />
      </div>
      <hr />
    </ProductsStyled>
  );
}

export default Products;
