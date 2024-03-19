import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import DealItems from "./DealItems"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { useState, useEffect } from "react"


function Deals () {

	const [ slide, setSlide ] = useState(0)

	function slideLeft() {
		if (slide >= 2) return;
		setSlide(slide => slide + 1)
	}

	function slideRight() {
		if (slide == 0) return;
		setSlide(slide => slide - 1)
	}

	useEffect(() => {

		setTimeout(() => {
			if (slide >= 2) {
				setSlide(0)
				return;
			}

			setSlide(slide => slide + 1)
		}, 3500)
	})

	return (
		<div className="deals">
			<span>Deals of the Day</span>

			<div className="deal-carousel">

				{/*<div className="carousel-arrows up">
					<span onClick={slideRight} className={slide == 0 ? "disable" : ''}> <AiOutlineArrowLeft /> </span>
					<span onClick={slideLeft} className={slide >= 2 ? "disable" : ''}> <AiOutlineArrowRight />  </span>
				</div>*/}


				<div className="carousel-inner padded slow" style={{translate : `-${(slide * 540) + (slide * 28)}px 0`}}>
					<DealItems />
					<DealItems />
					<DealItems />
					<DealItems />
				</div>
			</div>
		</div>
	)
}

export default Deals