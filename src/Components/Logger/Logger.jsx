import "../../Styles/Logger.css"
import "../../Styles/MobileStyling/Logger.css"
import Login from "./Login"
import Signin from "./Signin"
import { useSelector, useDispatch } from "react-redux"
import { useRef, useEffect } from "react"
import { toggle } from "../../Features/Logger.js"
import { BsX } from "react-icons/bs"


function Logger () {

	const logger = useSelector((state) => state.logger.value)
	const dispatch = useDispatch()
	const loggerRef = useRef()

	useEffect(() => {
		const logger = document.querySelector('.logger')

		if (!logger) return;

		logger.addEventListener('pointerdown', (e) => {
			if (!loggerRef.current.contains(e.target)) {
				dispatch(toggle({ opened:false, page: "login" }))
			}
		})
	})

	return (
		<div className={logger.opened ? "logger" : "logger-closed"}>

			<div className="logger-container" ref={loggerRef}>
				<span className="logger-exit" onClick={() => {dispatch(toggle({ opened:false, page:logger.page }))}}> <BsX /> </span>

				<div className="logger-left">
				</div>

				<div className="logger-right">
						{
							logger.page === "login"
							?
							<Login />	
							:
							<Signin />
						}
				</div>
			</div>
		</div>
	)
}

export default Logger;
