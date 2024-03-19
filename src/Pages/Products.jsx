import "../Styles/Products.css"
import "../Styles/MobileStyling/Products.css"
import ProductsMain from "../Components/Products/ProductsMain"

function Products() {
	return (
		<div className="products">
			<div className="header">Products</div>
			<ProductsMain />
		</div>
	)
}

export default Products;