import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {

  const { getCartAmountTotal } = useContext(StoreContext)

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>

        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip code ' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone no' />
         
         <Link to={'/cart'}><button className='btn'>Go Back</button></Link>

      </div>

      <div className="place-order-right">
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
              <p>${getCartAmountTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {/* ye delivery charges h +2*/}
              <b>{getCartAmountTotal() === 0 ? 0 : `$${getCartAmountTotal() + 2}`}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder
