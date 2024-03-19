import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import { useState, useEffect } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

function HeroSection () {

	const [ slide, setSlide ] = useState(0)

	function slideLeft() {
		if (slide >= 3) return;
		setSlide(slide => slide + 1)
	}

	function slideRight() {
		if (slide == 0) return;
		setSlide(slide => slide - 1)
	}

	return (
		<div className="banner">
			<div className="banner-info">
				<span>
					GET NEW GADGETS AT MINIMAL PRICES WITH EPIC CUSTOMER SERVICES
				</span>

				<button>Shop Now</button>
			</div>

			<div className="carousel" style={{translate : `-${slide * 25}% 0`}}>
				<div> <img src="/Banner/sec1PcKv.webp" /> </div>
				<div> <img src="/Banner/images (16).jpeg" /> </div>
				<div> <img src="/Banner/Apple-iMac-Banner.jpg" /> </div>
				<div> <img src="/Banner/lauren-mancke-aOC7TSLb1o8-unsplash.jpg" /> </div>
			</div>

			<div className="carousel-arrows">
				<span onClick={slideRight} className={slide == 0 ? "disable" : ''}> <AiOutlineArrowLeft /> </span>
				<span onClick={slideLeft} className={slide >= 3 ? "disable" : ''}> <AiOutlineArrowRight />  </span>
			</div>

			<div className="carousel-indicator">
				<span className={slide == 0 ? "selected" : ''} />
				<span className={slide == 1 ? "selected" : ''} />
				<span className={slide == 2 ? "selected" : ''} />
				<span className={slide == 3 ? "selected" : ''} />
			</div>
		</div>
	)
}

export default HeroSection;