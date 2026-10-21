import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Home({addToCart}){


return(

<div>

<h1>Product Catalog</h1>


<div>

{
products.map(product=>

<ProductCard

key={product.id}

product={product}

addToCart={addToCart}

/>

)

}

</div>


</div>


)

}


export default Home;