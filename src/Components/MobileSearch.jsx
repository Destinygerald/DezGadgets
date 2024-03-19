import "../Styles/MobileStyling/MobileSearch.css"
import { useState } from "react"

function MobileSearch({ opened }){

	const [ search, setSearch ] = useState('')

	function handleChange(e) {
		setSearch(e.target.value)
	}

	return (
		<div className="mobile-search">
			<div className={ opened ? "show" : "hide" }>
				<input type="text" placeholder="Search..." value={search} onChange={handleChange} />
				<button>Search</button>
			</div>
		</div>
	)
}

export default MobileSearch;