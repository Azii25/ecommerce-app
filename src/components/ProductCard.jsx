import PropTypes from "prop-types";

function ProductCard({product, addToCart}){

return(

<div className="card">

<img src={product.image}/>

<h3>{product.name}</h3>

<p>{product.description}</p>

<p>₱{product.price}</p>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>

)

}


ProductCard.propTypes={
 product:PropTypes.object.isRequired,
 addToCart:PropTypes.func.isRequired
}


export default ProductCard;