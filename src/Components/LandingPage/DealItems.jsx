import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import { AiFillStar } from "react-icons/ai"

function DealItems ({ imgSrc, itemName, ratings, prevPrice, currentPrice, totalAmount, amountSold, timeLeft, percentageOff }) {
	return (
		<div className="deal-item">
			<div>
				<img src={imgSrc} alt={imgSrc} />
				<div className="perct-off">-{percentageOff || '--'}%</div>
			</div>

			<div>
				<span>{itemName || "Name" }</span>

				<div>
					<span> <AiFillStar/> </span>
					<span> <AiFillStar/> </span>
					<span> <AiFillStar/> </span>
					<span> <AiFillStar/> </span>
					<span> <AiFillStar/> </span>
				</div>

				<div>
					<span>#{prevPrice || "00.00"}</span>
					<span>#{currentPrice || "11.11"}</span>
				</div>

				<div className="amount-bar">
					<div>
						<span>Available: {totalAmount - amountSold || 0}</span>
						<span>Sold: {amountSold || 0}</span>
					</div>
					<progress type="progress" value={amountSold || 20} max={totalAmount || 100}>{amountSold || 20}</progress>
				</div>

				<div>
					<span>Hurry up offer ends in:</span>

					<div className="timer">
						<div>
							<span>00</span>
							<span>DAYS</span>
						</div>
						
						<div>
							<span>00</span>
							<span>HRS</span>
						</div>

						<div>
							<span>00</span>
							<span>MINS</span>
						</div>

						<div>
							<span>00</span>
							<span>SECS</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DealItems;