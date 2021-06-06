import '../../App.css';
import './Shop.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import glass from '../../assets/product_pics/glass.jpeg';
import wood from '../../assets/product_pics/wood.jpeg';
import leather from '../../assets/product_pics/leather.jpeg';
import yeti from '../../assets/product_pics/yeti.jpeg';
import {updateCart} from '../../redux/cartReducer';
import { connect } from 'react-redux';
// import { logout } from '../../redux/userReducer';

function Shop(props) {
  console.log(props)
  const [cart, setCart] = useState([])

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products')
    .then(res => {
      setProducts(res.data)
    })
  },[])

  function addToCart(item) {
    let newCart = [...cart] 
    newCart.push(item)
    setCart(newCart)
    console.log(cart)
    updateCart(cart)
  }

  const mappedProducts = products.map(product => {
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
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  })


  return (
    <body>
      <div>
        <div className="product-container">{mappedProducts}</div>
      </div>
    </body>
  )


}

function mapStateToProps(state) {
  console.log(state)
  return {state}
}

export default connect(mapStateToProps, {updateCart})(Shop);