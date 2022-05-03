import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../Navbar/navbar.module.css';


function Navbar() {
  const items = useSelector((state) =>state.cart);
  return (
    <div style={{display : 'flex', justifyContent : 'space-between'}}>
      <span className={styles.logo}>REDUX STORE</span>
      <div>
      <Link href='/'> Home </Link>
      <Link href='/cart'> Cart </Link>
      <span className= {styles.cartCount}>Cart items : {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar;