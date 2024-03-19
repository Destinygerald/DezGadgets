import "../../Styles/Products.css"
import ProductsSide from "./ProductsSide"
import ProductsDisplay from "./ProductsDisplay"
import ProductPagination from "./ProductPagination"

function ProductMain () {
	return (
		<div className="products-main">
			<ProductsSide />
			<ProductsDisplay />
		</div>
	)
}

export default ProductMain;