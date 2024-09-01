import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItem, food_list, removeFromCart, getCartAmountTotal } = useContext(StoreContext)

  const navigate = useNavigate() ;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (

              <div>
                <div key={index} className='cart-items-title  cart-items-item' >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  {/* ye quantity h */}
                  <p>{cartItem[item._id]}</p>
                  {/*is mai item.price ko cartitems[item._id] ko multiple kiya h jo cart mai mujood h means k quantity se * krdo */}
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>❌</p>
                  {/* <p>{item.category}</p> */}
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartAmountTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getCartAmountTotal()===0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {/* ye delivery charges h +2*/}
              <b>{getCartAmountTotal()===0? 0 :`$${getCartAmountTotal()+2}`}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promo code here ' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
