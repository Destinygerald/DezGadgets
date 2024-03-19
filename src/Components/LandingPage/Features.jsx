import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import { BsRocket, BsWallet, BsHeadset, BsUmbrella } from "react-icons/bs"
import { BiMoney } from "react-icons/bi"

function FeaturesItem ({ icon, title, description }) {
	return (
		<div className="feature-item">
			<div>{icon}</div>

			<div>
				<span>{title}</span>
				<span>{description}</span>
			</div>
		</div>
	)
}

function Features () {
	return (
		<div className="features">
			<FeaturesItem icon={<BsRocket />} title="Free Shopping" description="From $00.00" />
			<FeaturesItem icon={<BiMoney />} title="Money Guarantee" description="30 days back" />
			<FeaturesItem icon={<BsWallet />} title="Payment Method" description="Secure system" />
			<FeaturesItem icon={<BsHeadset />} title="Onlin Support" description="24 hours in a day" />
			<FeaturesItem icon={<BsUmbrella />} title="100% Sale" description="Secure shopping" />
		</div>
	)
}

export default Features;