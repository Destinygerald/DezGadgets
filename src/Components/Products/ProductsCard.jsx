import "../../Styles/Products.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { addToCart, minusFromCart } from "../../Features/Cart"
import { useDispatch, useSelector } from "react-redux"
import { toggleToFav } from "../../Features/Favorites"

function ProductsCard ({ productImg, productName, productPrice }) {

	const [ liked, setLiked ] = useState(false)
	const [ carted, setCarted ] = useState(0)
	const [ favItems, setFavItems ] = useState(false);

	const location = useLocation()

	const cartedItem = useSelector((state) => state.cartItems.value)
	const Favs = useSelector((state) => state.favorites.value)

	const dispatch = useDispatch()

	const cartGlobal = cartedItem.carted.find(item => ( item.name === productName  ))
	const favGlobal = Favs.favorites.find(item => ( item.name === productName ))

	function toggleLiked() {
		setLiked(!liked)
	}

	function add_to_cart(productName, productPrice) {
		setCarted((carted) => carted + 1)
		dispatch(addToCart({ name: productName, price: productPrice }))
	}

	function removeFromCart(productName) {
		setCarted((carted) => carted - 1)
		dispatch(minusFromCart({ name: productName }))
	}	

	function favToggle (productName, productPrice) {
		toggleLiked()
		//Problem with the toggling 
		//It doesnt respond when youve toggled and changed the page and try to toggle again
		//Use Local Storage to save the favorites
		setFavItems(!favItems)
		dispatch(toggleToFav({ name: productName, price:productPrice}))
		// setFavItems(Favs.favorites.some(item => ( item.name === productName )))
			}

	useEffect(() => {
		setFavItems(Favs.favorites.some(item => ( item.name === productName )))
	}, [])


	return (
		<div className="product-card">
			<div className={location.pathname == "/favorites" ? "product-card-fav" : ''}>
				<img src={productImg} alt={productImg} />
			</div>

			<div className="product-fav" onClick={() => favToggle(productName, productPrice)}>
				{
					liked || favItems
					?
					<AiFillHeart />
					:
					<AiOutlineHeart />
				}
			</div>

			<div className="product-info">
				<div>
					<span>{ productName || "Product Name" }</span>
					<span>#{ productPrice || "00.00" }</span>
				</div>

				<div className={ location.pathname == "/favorites" ? "product-info-button-fav" : "product-info-button"}>
					{
						cartGlobal?.quantity <= 0 || cartGlobal?.quantity == undefined
						?
						<button className="add-cart" onClick={() => add_to_cart(productName, productPrice)}>Add to Cart</button> 
						:
						<div className="cart-buttons">
							<button onClick={() => removeFromCart(productName)}>-</button>

							<span>{cartGlobal?.quantity || 0}</span>

							<button onClick={() => add_to_cart(productName, productPrice)}>+</button>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default ProductsCard;