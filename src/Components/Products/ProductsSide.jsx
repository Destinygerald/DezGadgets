import "../../Styles/Products.css"
import { useState, useEffect } from "react"

function ProductsCheck ({ name, value, clickHandler }) {
	return (
		<div className="products-check">
			<input type="checkbox" id={name} name={name} value={value} onClick={clickHandler} />
			<label htmlFor={name}>{value}</label>
		</div>
	)
}

function ProductsSide () {

	const [ categories, setCategories ] = useState([])

	function updateCategory (e) {
		if (categories.includes(e.target.value)) {
			// console.log("has it")
			setCategories(categories.filter(cat => (
				cat !== e.target.value
			)))
			return;
		}

		setCategories([...categories, e.target.value])
		// console.log(categories)
	}

	//useEffect -# to change the categories displayed after clicking

	return (
		<div className="products-sidebar">
			<div className="products-category">
				<span>Product Categories</span>	

				<div>
					<ProductsCheck name="all" value="All" clickHandler={updateCategory} />
					<ProductsCheck name="phones" value="Phones" clickHandler={updateCategory} />
					<ProductsCheck name="laptops" value="Laptops" clickHandler={updateCategory} />
					<ProductsCheck name="televison" value="Television" clickHandler={updateCategory} />
					<ProductsCheck name="all" value="Tablets" clickHandler={updateCategory} />
					<ProductsCheck name="game_console" value="Game console" clickHandler={updateCategory} />
					<ProductsCheck name="ac" value="AC" clickHandler={updateCategory} />
					<ProductsCheck name="accessories" value="Accessories" clickHandler={updateCategory} />
					<ProductsCheck name="home_appliances" value="Home Appliances" clickHandler={updateCategory} />
				</div>
			</div>

			<div className="products-category">
				<span> Brands </span>

				<div>
					<ProductsCheck name="gionee" value="Gionee" clickHandler={updateCategory} />
					<ProductsCheck name="google" value="Google" clickHandler={updateCategory} />
					<ProductsCheck name="samsung" value="Samsung" clickHandler={updateCategory} />
					<ProductsCheck name="Tecno" value="Tecno" clickHandler={updateCategory} />
					<ProductsCheck name="apple" value="Apple" clickHandler={updateCategory} />
					<ProductsCheck name="infinix" value="Infinix" clickHandler={updateCategory} />
					<ProductsCheck name="xiaomi" value="Xiaomi" clickHandler={updateCategory} />
					<ProductsCheck name="lg" value="LG" clickHandler={updateCategory} />
					<ProductsCheck name="nokia" value="Nokia" clickHandler={updateCategory} />
				</div>

			</div>
	
			<div className="products-category-2">
				<span>Filter by Price</span>

				<div>
					<div>	
						<span>Min Price</span>
						<input type='number' placeholder="0.00" min="0" />
					</div>

					<div>	
						<span>Max Price</span>
						<input type='number' placeholder="50.00" min="50" />
					</div>
				</div>

				<button>Filter</button>


			</div>

		</div>
	)
}

export default ProductsSide;