import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiFillStar } from "react-icons/ai"
import { useState, useEffect } from "react"
import { FEATURED_PRODUCTS, wait } from "../../api/Api.js"
import { useQuery } from "@tanstack/react-query"


function FeaturedProductCard ({ imgSrc, productName, productPrice, rating }) {

	useEffect(() => {
		let stars = document.querySelectorAll(".featured-product-rate")

		stars?.forEach((star) => {
			let i = 0;

			if (!star) return;

			while ( i < rating) {
				star?.children[i].classList.add('rated')
				i++;
			}
		})

	}, [rating])

	return (
		<div className="featured-product-card">
			<div>
				<img src={imgSrc} alt={imgSrc} />
			</div>

			<div className="featured-product-info">
				<div className="featured-product-rate">
					<span className="star"> <AiFillStar /> </span>
					<span className="star"> <AiFillStar /> </span>
					<span className="star"> <AiFillStar /> </span>
					<span className="star"> <AiFillStar /> </span>
					<span className="star"> <AiFillStar /> </span>
				</div>

				<span>{ productName || "Name"}</span>
				<span>#{ productPrice || "00" }</span>
			</div>

			<button>Add to Cart</button>

		</div>
	)
}

function FeaturedProduct () {

	const [ slide, setSlide ] = useState(0)
	const [ isDrag, setIsDrag ] = useState(false)

	function slideLeft() {
		if (slide >= 9) return;
		setSlide(slide => slide + 1)
	}

	function slideRight() {
		if (slide == 0) return;
		setSlide(slide => slide - 1)
	}

	const fpQuery = useQuery({
		queryKey: ['featuredProduct'],
		queryFn: () => wait(3000).then(() => [...FEATURED_PRODUCTS])
	})

	useEffect(() => {

		let elem2 = document.querySelector(".second-carousel")

		if (window.innerWidth > 600) return; 


		const dragStart = () => {
			setIsDrag(true)
		}

		const dragEnd = () => {
			setIsDrag(false)
		}

		const drag = (e) => {
			isDrag && (elem2.scrollLeft -= e.movementX)
		}

		elem2.addEventListener('pointerdown', dragStart);
		elem2.addEventListener('pointerup', dragEnd);
		elem2.addEventListener('pointermove', drag);

		return (() => {
			elem2.removeEventListener('pointerdown', dragStart);
			elem2.removeEventListener('pointerup', dragEnd);
			elem2.removeEventListener('pointermove', drag);
		})
	})


	return (
		<div className="featured-product">
			<span>Featured Products</span>

			<div className="popular-carousel second-carousel">
				<div className="carousel-arrows up">
					<span onClick={slideRight} className={slide == 0 ? "disable" : ''}> <AiOutlineArrowLeft /> </span>
					<span onClick={slideLeft} className={slide >= 9 ? "disable" : ''}> <AiOutlineArrowRight />  </span>
				</div>

				<div className="carousel-inner padded" style={{translate : `-${(slide * 200) + (slide * 12)}px 0`}}>
					{
						fpQuery.isLoading ?
						FEATURED_PRODUCTS.map((fp, idx) => (
							<FeaturedProductCard key={idx} productName='---' productPrice='---' />
						))
						: 
						fpQuery.data.map((fp, idx) => (
							<FeaturedProductCard key={idx} productName={fp.Name} productPrice={fp.price} rating={fp.rating} />
						))
					}
				</div>
			</div>
		</div>
	)
}

export default FeaturedProduct;