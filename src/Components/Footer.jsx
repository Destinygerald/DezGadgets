import "../Styles/Footer.css"
import "../Styles/MobileStyling/Footer.css"
import { useState } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsWallet, BsHeadset } from "react-icons/bs"
import { BiMoney } from "react-icons/bi"
import { CgFacebook, CgYoutube, CgTwitter, CgInstagram } from "react-icons/cg"
import { CiLinkedin } from "react-icons/ci"

const COLLECTIONS = [ "Smartphones", "Headphones", "Laptops & Tablets", "Monitors", "Wristwatch", "Printers"]
const CUSTOMER_CARE = [ "My Account", "Store Locator", "Customer Care", "Product Support", "FAQ"]
const PRIVACY_POLICY = [ "My Account", "Store Locator", "Customer Care", "Product Support", "FAQ"]
const GET_INVOLVED = [ "My Account", "Store Locator", "Customer Care", "Product Support", "FAQ"]

function FooterList ({ header, list }) {
	return (
		<div className="footer-list">
			<span>{ header }</span>

			<div>
				{
					list.map((item, idx) => (
						<div key={idx}>
							{ item }
						</div>
					))
				}
			</div>
		</div>
	)
}

function FooterItem ({ icon, title }) {
	return (
		<div className="footer-item">
			<span> {icon} </span>
			<span> {title} </span>
		</div>
	)
}

function PaymentCards ({ imgSrc }) {
	return (
		<div className="payment-card">
			<img src={imgSrc} alt={imgSrc} />
		</div>
	)
}

function Footer () {

	const [ email, setEmail ] = useState('')

	function changeHandler(e) {
		setEmail(e.target.value)
	}

	return (
		<div className="footer">
			<div>
				<span> Subscribe to Newsletter </span>

				<div className="subscription">
					<input type="text" placeholder="Your Email Address" value={email} onChange={changeHandler} />
					<span className="subscription-icon"> <AiOutlineMail /> </span>
				</div>

				<div className="contact">
					<span>Follow us on:</span>

					<div>
						<span> <CgFacebook /> </span>
						<span> <CgTwitter /> </span>
						<span> <CgYoutube /> </span>
						<span> <CgInstagram /> </span>
						<span> <CiLinkedin /> </span>
					</div>
				</div>
			</div>

			<div className="hr-line" />

			<div className="footer-content">
				<FooterList header="Privacy Policy" list={PRIVACY_POLICY} />
				<FooterList header="Collections" list={COLLECTIONS} />
				<FooterList header="Get Involved" list={GET_INVOLVED} />
				<FooterList header="Customer care" list={CUSTOMER_CARE} />
			</div>

			<div className="hr-line" />

			<div className="footer-contact">
				<span>DezStore</span>
				<FooterItem icon={<BsHeadset />} title="+234 805 674 3237 " />
				<FooterItem icon={<BiMoney />} title="Amount over $100" />
				<FooterItem icon={<BsWallet />} title="Save up to 20%" />
			</div>

			<div className="hr-line" />

			<div className="footer-copyright">
				<span>© 2024 CODE INTERACTIVE ALLRIGHTS RESERVED</span>

				<span>www.DezStore.com</span>

				<div>
					<PaymentCards imgSrc="/Banner/download.png" />
					<PaymentCards imgSrc="/Banner/download (1).png" />
					<PaymentCards imgSrc="/Banner/images (17).jpeg" />
					<PaymentCards imgSrc="/Banner/images (18).jpeg" />
				</div>
			</div>
		
		</div>
	)
}

export default Footer;