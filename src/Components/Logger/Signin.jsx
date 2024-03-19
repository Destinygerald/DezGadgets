import "../../Styles/Logger.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toggle } from "../../Features/Logger"

function Signin () {

	const [ login, setLogin ] = useState({
		name: '',
		email: '',
		password: '',
	})

	const dispatch = useDispatch()

	function changeHandler(e) {
		setLogin({ ...login, [e.target.name]: e.target.value })
	}

	function submitHandler(e) {
		e.preventDefault()
	}

	function changePage() {
		dispatch(toggle({ opened: true, page: 'login' }))
	}

	return (
		<div className='login'>
			<span> SignUp </span>

			<form onSubmit={submitHandler}>
				<input type="text" name="name" placeholder="Username" value={login.name} onChange={changeHandler} />
				<input type="email" name="email" placeholder="Email" value={login.email} onChange={changeHandler} />
				<input type="password" name="password" placeholder="Password" value={login.password} onChange={changeHandler} />
				<input type="password" name="password" placeholder="Confirm Password"/>

				<div>
					<button>Cancel</button>
					<button type='submit'>Signup</button>
				</div>
			</form>

			<span onClick={changePage}>Don't have an Account yet? <span>Login</span></span>
		</div>
	)
}

export default Signin;