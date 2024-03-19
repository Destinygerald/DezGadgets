import "../../Styles/Slider.css"
import { BsX, BsPerson } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { sliderToggle } from "../../Features/Slider"
import { toggle } from "../../Features/Logger"
import { useNavigate } from "react-router-dom"

function Slider() {

	const slider = useSelector((state) => state.slider.value)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	function closeSlider() {
		dispatch(sliderToggle({ open: false }))
	}

	function openLogger() {
		dispatch(sliderToggle({ open: false }))
		dispatch(toggle({ opened: true, page: "login" }))
	}

	function pageHandler(page) {
		navigate(page)
		dispatch(sliderToggle({ open: false }))
	}

	return (
		<div className={ slider.open ? "slider" : "closed-slider"}>
			<span className="slider-exit" onClick={closeSlider}> <BsX /> </span>

			<div className="slider-top">
				<span> <BsPerson /> </span>

				<div>
					<span>Hello</span>
					<span>Your Account</span>
				</div>
			</div>

			<div className="slider-inner">
				<span onClick={() => pageHandler('/')}>Home</span>
				<span onClick={() => pageHandler('/')}>Collections</span>
				<span onClick={() => pageHandler('/')}>Profile</span>
				<span onClick={() => pageHandler('/products')}>Products</span>
				<span onClick={() => pageHandler('/favorites')}>Favourites</span>
				<span onClick={() => pageHandler('/')}>Cart</span>
				<span onClick={() => pageHandler('/contact')}>Contact Us</span>
			</div>

			<button onClick={openLogger}>Sign in</button>

		</div>
	)
}

export default Slider;