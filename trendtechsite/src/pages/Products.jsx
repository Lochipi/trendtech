import Card from "../components/Card"
import { ProductsStyled } from "./styles/Products.styled"
import data from "../assets/data"

function Products() {

  const product = data.map(item => 
    <Card 
      key= {item.key}
      {...item}
    />
   )

  return (
    <ProductsStyled>
      <h1>All Products</h1>
      <div className="products--container">
       {product}
       <hr />
      </div>
     <hr />
    </ProductsStyled>
  )
}

export default Products
