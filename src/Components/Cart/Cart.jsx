import "../../Styles/Cart.css"
import { BiTrash } from "react-icons/bi"
import { useSelector, useDispatch } from "react-redux"
import { useRef, useEffect, useState } from "react"
import { toggleCart } from "../../Features/CartSlider.js"
import { removeFromCart } from "../../Features/Cart.js"

function CartItems ({ imgSrc, itemName, itemAmount, itemPrice }){

	const dispatch = useDispatch()

	return (
		<div className="cart-item">
			<div className="cart-card">
				<div className="cart-img">
				 	<img src={imgSrc} alt={imgSrc} />
				</div>

				<div>
					<div className="cart-card-info">
						<span>Name: { itemName || "----" }</span>
						<span>Price: { itemPrice || "----"  }</span>
					</div>

					<span>{itemAmount || '---'}</span>
				</div>

				<div>
					<div onClick={() => {dispatch(removeFromCart({name: itemName}))}}>
						<BiTrash />
					</div>
				</div>
			</div>

			<div>
				<span>Price:</span>
				<span>
					#{
						itemAmount * itemPrice
						|| "----"
					}
				</span>
			</div>
		</div>
	)
}

function Cart () {

	const [ total, setTotal ] = useState(0)
	const cart = useSelector((state) => state.cart.value)
	const cartList = useSelector((state) => state.cartItems.value )
	const cartRef = useRef()
	const dispatch = useDispatch()

	useEffect(() => {

		setTotal(0)

		cartList.carted.forEach(item => (
			setTotal(total => (
				total += item.quantity * item.price
			))	
		))
	}, [cartList])

	// console.log(cartList.carted)

	useEffect(() => {
		const app = document.querySelector(".app")

		if (!app) return;

		const cartSlider = document.querySelector('.cart')

		
		app.addEventListener('pointerdown', (e) => {

			if (!cartSlider) return;

			if (!cartRef.current.contains(e.target)) {
				dispatch(toggleCart({ opened: false }))

			}
		})

		return (() => {	
			app.removeEventListener('pointerdown', (e) => {

				if (!cartSlider) return;

				if (!cartRef.current.contains(e.target)) {
					dispatch(toggleCart({ opened: false }))

				}
			})
		})
	})

	return (
		<div className={ cart.opened ? "cart" : "hide-cart"} ref={cartRef}>
			<span>Cart Items</span>

			<div>
				{
					cartList.carted.map((item) => (
						<CartItems itemName={item.name} itemPrice={item.price} itemAmount={item.quantity} />
					))
				}	
			</div>

			<div>
				Total :  #{ total || '---'}
			</div>
		</div>
	)
}

export default Cart;
