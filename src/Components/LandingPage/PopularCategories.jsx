import "../../Styles/LandingPage.css"
import "../../Styles/MobileStyling/LandingPage.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { useState, useEffect } from "react"
import { CATEGORIES, wait } from "../../api/Api.js"
import { useQuery } from "@tanstack/react-query"

function CategoryItem ({ imgSrc, category}) {
	return (
		<div className="category-item">
			<div>
				<img src={imgSrc} alt="loading" />
			</div>

			<span>{ category }</span>

			

		</div>
	)
}

function PopularCategories () {

	const [ slide, setSlide ] = useState(0)
	const [ isDrag, setIsDrag ] = useState(false)

	const CategoryQuery = useQuery({
		queryKey: ['category4'],
		queryFn: () => wait(2000).then(() => [...CATEGORIES])
	})

	function slideLeft() {
		if (slide >= 2) return;
		setSlide(slide => slide + 1)
	}

	function slideRight() {
		if (slide == 0) return;
		setSlide(slide => slide - 1)
	}

	// console.log(window.innerWidth)

	useEffect(() => {

		let elem = document.querySelector(".first-carousel")

		if (window.innerWidth > 600) return; 


		const dragStart = () => {
			setIsDrag(true)
		}

		const dragEnd = () => {
			setIsDrag(false)
		}

		const drag = (e) => {
			if (isDrag) {
				elem.scrollLeft -= e.movementX
				return;
			} 
		}

		elem.addEventListener('pointerdown', dragStart);
		elem.addEventListener('pointerup', dragEnd);
		elem.addEventListener('pointermove', drag);

		return (() => {
			elem.removeEventListener('pointerdown', dragStart);
			elem.removeEventListener('pointerup', dragEnd);
			elem.removeEventListener('pointermove', drag);
		})

	})

	return (
		<div className="popular-category">
			<span>Popular Categories</span>

			<div className="popular-carousel first-carousel">
				<div className="carousel-arrows up">
					<span onClick={slideRight} className={slide == 0 ? "disable" : ''}> <AiOutlineArrowLeft /> </span>
					<span onClick={slideLeft} className={slide >= 2 ? "disable" : ''}> <AiOutlineArrowRight />  </span>
				</div>

				<div className="carousel-inner padded" style={{translate : `-${(slide * 172) + (slide * 12)}px 0`}}>
					{
						CategoryQuery.isLoading 
						?
						CATEGORIES.map((cat, idx) => (
							<CategoryItem key={idx} category='-----'/>
						))
						: 
						CategoryQuery.data.map((cat, idx) => (
							<CategoryItem key={idx} category={cat.category}/>
						))
					}
				</div>
			</div>

			<div>
				Welcome to DezStore! Wrap new offers / gift every single day on Weekends - New Coupon code: DezStore2024
			</div>
		</div>
	)
}

export default PopularCategories;