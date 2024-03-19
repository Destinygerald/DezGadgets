import "../../Styles/Products.css"
import ProductsCard from "./ProductsCard"
import ProductPagination from "./ProductPagination"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { wait } from "../../api/Api"
import { PRODUCTS } from "../../api/Placeholders"

function ProductSort ({ opened }) {

	const [ selected, setSelected ] = useState('Default')

	return (
		<div className={opened ? "products-sort" : "sort-hide"}>
			<span>Default</span>
			<span>Default</span>
			<span>Default</span>
			<span>Default</span>
			<span>Default</span>
		</div>
	)
}


function ProductsDisplay () {
	
	const [ opened, setOpened ] = useState(false)
	
	function toggleOpen(){
		setOpened(!opened)
	}

	const productsQuery = useQuery({
		queryKey: ['products'],
		queryFn: () => wait(3000).then(() => [...PRODUCTS])
	})

	return (
		<div className="products-display">
			<div>
				<div onClick={toggleOpen}>
					<span>Sort</span>
					{	
						opened 
						?
						<span><AiOutlineCaretUp /></span>
						:
						<span><AiOutlineCaretDown /></span>
					}
				</div>

				<div>
					Filter
				</div>

				<ProductSort opened={opened} />
			</div>

			<div className="products-display-main">
				{
					productsQuery.isLoading 
						?
					PRODUCTS?.map((product, idx) => (
						<ProductsCard key={idx} productImg={product.image} productName={product.name} productPrice={product.price} />
					))
						:
					productsQuery.data.map((product, idx) => (
						<ProductsCard key={idx} productImg={product.image} productName={product.name} productPrice={product.price} />
					))
				}
			</div>

			<ProductPagination />
		</div>
	)
}

export default ProductsDisplay;