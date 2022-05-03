import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/slices/cartSlice';
import { fetchProducts, STATUSES } from '../../store/slices/productSlice';
import styles from '../Navbar/navbar.module.css';

function Products() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data : products, status} = useSelector((state) => state.product);

  useEffect(() => {

    // fetching products
    console.log('use effect of home');
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // }

    // fetchProducts();
  }, [])

  //handle add
  const handleAdd = (product) =>{
      dispatch(add(product));
  }

  if(status === STATUSES.LOADING){
    return <h2>LOADING......</h2>;
  }
  console.log('render called');
  return (
    <div className={styles.productsWrapper}>
      {
        products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt=''></img>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className={styles.btn} onClick = {() => handleAdd(product)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;