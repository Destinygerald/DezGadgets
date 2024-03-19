import "../../Styles/Products.css"
import { useState } from "react"
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai"

function ProductPagination() {

	const [ currentPage, setCurrentPage ] = useState(1)

	return (
		<div className="product-pagination">
			<span> <AiOutlineCaretLeft /> </span>
			
			<div>
				<span>1</span>
			</div>

			<span> <AiOutlineCaretRight /> </span>
		</div>
	)
}

export default ProductPagination;