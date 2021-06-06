import './Cart.css';
import { connect } from 'react-redux';
import glass from '../../assets/product_pics/glass.jpeg';
import wood from '../../assets/product_pics/wood.jpeg';
import leather from '../../assets/product_pics/leather.jpeg';
import yeti from '../../assets/product_pics/yeti.jpeg';

function Cart(props) {
console.log(props)

const mappedProducts = props.state.cartReducer.cartList.map(product => {
  let image 
  if (product.image === 'glass') {
    image = glass
  }
  else if (product.image === 'wood') {
    image = wood
  }
  else if (product.image === 'leather') {
    image = leather
  }
  else if (product.image === 'yeti') {
    image = yeti
  }


  return <div className="product-item" key={product.id}>

  <img src={ image } alt={product.image} width="200"/>
  <p>{product.product_name}</p>
  <p>{product.material}</p>
  <p>{product.price}</p>
  
  </div>
})

return <div>{mappedProducts}</div>
}



function mapStateToProps(state) {
  // console.log(state)
  return {state}
}



export default connect(mapStateToProps)(Cart);