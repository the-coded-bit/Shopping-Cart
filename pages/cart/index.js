import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Products } from '../../components'
import Page from '../../layouts/Page'
import { remove } from '../../store/slices/cartSlice';


function Cart() {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //handle remove
    const handleRemove = (item) =>{
        dispatch(remove(item.id));
    }
    return (
            <Page title='Cart' description='cart page'>
                <Navbar />
                <div>
                    <h3>Cart</h3>
                    <div className='cartWrapper'>
                        {
                            items.map((item) =>(
                                <div className='cartCard'>
                                   <img src={item.image} alt = ''></img> 
                                   <h5>{item.title}</h5>
                                   <h5>{item.price}</h5>
                                   <button className='btn' onClick={() => handleRemove(item)}>Remove</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Page>
    )
}

export default Cart