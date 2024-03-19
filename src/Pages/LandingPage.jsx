import "../Styles/LandingPage.css"
import "../Styles/MobileStyling/LandingPage.css"
import HeroSection from "../Components/LandingPage/HeroSection"
import Features from "../Components/LandingPage/Features"
import PopularCategories from "../Components/LandingPage/PopularCategories"
import Deals from"../Components/LandingPage/Deals"
import Offers from "../Components/LandingPage/Offers"
import FeaturedProduct from "../Components/LandingPage/FeaturedProduct"
import Offer2 from "../Components/LandingPage/Offer2"

function LandingPage () {
	return (
		<div className="landing-page">
			<HeroSection />
			<Features />
			<PopularCategories />
			<Deals />
			<Offers />
			<FeaturedProduct />
			<Offer2 />
		</div>
	)
}

export default LandingPage;