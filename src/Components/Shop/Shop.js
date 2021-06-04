import '../../App.css';
import './Shop.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { logout } from '../../redux/userReducer';

function Shop(props) {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products')
    .then(res => {
      setProducts(res.data)
    })
  },[])

  const mappedProducts = products.map(product => {
    return <div className="product-item" key={product.id}>

    <img src={`/src/assets/product_pics/${product.image}.jpeg`} alt={product.image}/>
    <p>{product.product_name}</p>
    <p>{product.material}</p>
    <p>{product.price}</p>
    <button>Add to Cart</button>
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

export default(Shop);