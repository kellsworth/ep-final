import './Shop.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function Shop(props) {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products')
    .then(res => {
      setProducts(res.data)
    })
  },[])

  const mappedProducts = products.map(product => {
    return <div key={product.id}>
    <img src={`../../assets/product_pics/glass.jpeg`} alt={product.image}/>
    {/* <img src={`../../assets/product_pics/${product.image}.jpeg`} alt={product.image}/> */}
    <p>{product.product_name}</p>
    <p>{product.material}</p>
    <p>{product.price}</p>
    <button></button>
    </div>
  })


  return (
    <div>
      <header>

      </header>
      <div>{mappedProducts}</div>
    </div>

  )


}

export default(Shop);