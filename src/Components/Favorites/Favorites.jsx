import "../../Styles/Favorites.css"
import "../../Styles/MobileStyling/Favorite.css"
import ProductsCard from "../Products/ProductsCard"
import { useQuery } from "@tanstack/react-query"
import { wait } from "../../api/Api.js"
import { useSelector } from "react-redux"

function Favorites () {

	const favs = useSelector((state) => state.favorites.value)

	const favQuery = useQuery({
		queryKey: ['favorites'],
		queryFn: () => wait(2000).then(() => [...favs.favorites])
	})

	// console.log(favQuery.data)

	return (
		<div className="favorites">
			<span>Favorites</span>

			<div className="favorites-display">
				{
					favQuery.isLoading ?
					<>
						<ProductsCard />
						<ProductsCard />
						<ProductsCard />
						<ProductsCard />
						<ProductsCard />
						<ProductsCard />
						<ProductsCard />
					</>
					:
					favQuery?.data?.map((product, idx) => (
						<ProductsCard  key={idx}/>
					))
					
				}
				
			</div>
		</div>
	)
}

export default Favorites;