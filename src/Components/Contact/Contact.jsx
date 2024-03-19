import "../../Styles/Contact.css"
import "../../Styles/MobileStyling/Contact.css"
import { useState } from "react"

function Contact () {

	const [ reportInfo, setReportInfo ] = useState({
		email: '',
		phone: '',
		report: ''
	})

	function submitHandler(e) {
		e.preventDefault()
		return;
	}

	function changeHandler (e) {
		setReportInfo({...reportInfo, [e.target.name]: e.target.value})
	}

	return (
		<div className="contact-us">
			<div className="contact-container">
				
				<div className="contact-container-left">
					<span>Contact Us</span>
				</div>

				<form className="contact-container-right" onSubmit={submitHandler}>
					<input type="email" name='email' placeholder="Email" value={reportInfo.email} onChange={changeHandler} />
					<input type="number" name='phone' placeholder="Phone" value={reportInfo.phone} onChange={changeHandler} />
					<textarea name='report' placeholder="Message" value={reportInfo.report} onChange={changeHandler}/>

					<button>Submit</button>
				</form>

			</div>
		</div>
	)
}

export default Contact