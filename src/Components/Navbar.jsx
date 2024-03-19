import "../Styles/Navbar.css"
import "../Styles/MobileStyling/Navbar.css"
import { useState } from "react"
import { AiFillPhone, AiFillMail, AiOutlineMenu } from "react-icons/ai"
import { BsBag, BsPerson, BsCaretDown, BsSearch, BsX } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toggle } from "../Features/Logger.js"
import { sliderToggle } from "../Features/Slider.js"
import MobileSearch from "./MobileSearch"
import Cart from "./Cart/Cart.jsx"
import { toggleCart } from "../Features/CartSlider.js"

function SearchBar() {

	const [ search, setSearch ] = useState('')

	function searchHandler(e){
		setSearch(e.target.value)
	}

	return (
		<div className="searchbar">
			<input type="text" value={search} onChange={searchHandler} placeholder="Search Product..." />
			<div className="categories">
				<span>All Categories</span>
				<span> <BsCaretDown /> </span>
			</div>
			<button>Search</button>
		</div>
	)
}



function Navbar () {
	const [ mobileSearch, setMobileSearch ] = useState(false)
	const dispatch = useDispatch()
	const logger = useSelector((state) => state.logger.value)
	const slider = useSelector((state) => state.slider.value)
	const navigate = useNavigate()

	function toggleState () {
		if (logger.opened == false ) {
			dispatch(toggle({ opened: true, page: "login" }))
		} else {
			dispatch(toggle({ opened: false, page: "login" }))
		}
	}

	function toggleSearch () {
		if (mobileSearch) {
			setMobileSearch(false)
		} else {
			setMobileSearch(true)
		}
	}


	function openSlider () {
		dispatch(sliderToggle({ open:true }))	
	}

	function switchPage (page) {
		navigate(page)
	}

	return (
		<div className="navbar">

			<Cart />

			<div className="nav-top">
				<div>
					<span>Visit our online Store</span>
					
					<div>
						<span className="nav-icon"> <AiFillMail /> </span>
						<span>Email DezStore@gmail.com</span>
					</div>

					<div>
						<span className="nav-icon"> <AiFillPhone /> </span>
						<span>Hotline (+234) 805 674 3237</span>
					</div>
				</div>

				<div>
					<div>NGN</div>
					<div>English</div>
				</div>
			</div>


			<div className="nav-mid">
				<div>Logo Placeholder</div>

				<> <SearchBar /> </>

				<div>
					<div className="nav-profile">
						<span> <BsPerson /> </span>
						<div>
							<span>Hello</span>
							<span onClick={toggleState}>Login/Register</span>
						</div>
					</div>

					<div className="nav-cart" onClick={() => dispatch(toggleCart({ opened: true }))}>
						<span> <BsBag /> </span>
						<div>
							<span>Your Cart</span>
							<span>$0.00</span>
						</div>
					</div>
				</div>
			</div>

			<div className="nav-bottom">
				<MobileSearch opened={mobileSearch} />

				<div className="nav-list">
					<span onClick={() => switchPage('/')}>Home</span>
					<span>Collections</span>
					<span onClick={() => switchPage('/products')}>Products</span>
					<span onClick={() => switchPage('/contact')}>Contact Us</span>
					<span onClick={() => switchPage('/favorites')}>Favorites</span>
				</div>

				<div>
					<span>Special Offer</span>
					<span>Purchase Theme</span>
				</div>

				<div>
					<span onClick={toggleSearch}>
					{ 	
						mobileSearch 
						? 
						<BsX /> 
						:
						<BsSearch />

					}
					</span>
					<span onClick={openSlider}> <AiOutlineMenu /> </span>
				</div>
			</div>

		</div>
	)
}

export default Navbar;
