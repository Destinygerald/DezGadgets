import "../../Styles/Logger.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toggle } from "../../Features/Logger.js"

function Login () {

	const [ login, setLogin ] = useState({
		name: '',
		password: ''
	})

	const dispatch = useDispatch()

	function changeHandler(e) {
		setLogin({ ...login, [e.target.name]: e.target.value })
	}

	function submitHandler(e) {
		e.preventDefault()
	}

	function changePage() {
		dispatch(toggle({ opened: true, page: 'signin' }))
	}

	return (
		<div className='login'>
			<span> Login </span>

			<form onSubmit={submitHandler}>
				<input type="text" name="name" placeholder="Username" value={login.name} onChange={changeHandler} />
				<input type="password" name="password" placeholder="Password" value={login.password} onChange={changeHandler} />

				<div>
					<button>Cancel</button>
					<button type='submit'>Login</button>
				</div>
			</form>

			<span onClick={changePage}>Don't have an Account yet? <span>Signup</span></span>
		</div>
	)
}

export default Login;
