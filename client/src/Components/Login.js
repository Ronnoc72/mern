import React, { useState } from 'react';
import "../styles/login.css";

function Login() {
	const confirmLogin = () => {
		return;
	}
	const registerAccount = (e) => {
		fetch("http://localhost:9000/register");
	}
	return (
		<div className="main">
			<div id="login">
				<h1>Login</h1>
				<div className="center">
					<form href="http://localhost:9000/register/username/password" onSubmit={confirmLogin}>
						<div>
							<input name="username" type="text" placeholder="Username" required />
							<br />
							<input name="password" type="text" placeholder="Password" required />
							<button>Login</button>
						</div>
					</form>
				</div>
				<div className="center">
					<a href="#">Forgot Password</a>
				</div>
			</div>
			<div id="register">
				<h1>Register</h1>
				<div className="center">
					<form onSubmit={registerAccount} method="get">
						<div>
							<input name="username" type="text" placeholder="Username" required />
							<br />
							<input name="password" type="text" placeholder="Password" required />
							<br />
							<input name="confirm-password" type="text" placeholder="Comfirm Password" required />
							<button>Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;