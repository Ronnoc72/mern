import React, { useState } from 'react';
import "../styles/login.css";

function Login() {
	const [confirmed, setConfirmed] = useState("");
	// logs in the user by checking the database, them redirects the user.
	const confirmLogin = (e) => {
		e.preventDefault();
		let arr = [];
		const children = e.target.children[0].children[0].children;
		for (let i = 0; i < children.length; i++) {
			if (typeof(children[i].value) === "string") arr.push(children[i].value);
		}
		fetch(`http://localhost:9000/login/${arr[0]}/${arr[1]}`)
		.then(res => {
			if (res) {
				return res.json()
			}
		}).then(res => alert(res.mes));
		//window.location.href = `http://localhost:3000/home`;
		localStorage.username = arr[0];
	}
	// creates a new account for the user and redirects them.
	const registerAccount = (e) => {
		e.preventDefault();
		let arr = [];
		const children = e.target.children[0].children[0].children;
		for (let i = 0; i < children.length; i++) {
			if (typeof(children[i].value) === "string") arr.push(children[i].value);
		}
		if (arr[2] === arr[1]) {
			setConfirmed("");
			fetch(`http://localhost:9000/register/${arr[0]}/${arr[1]}`)
			.then(res => {
				if (res) {
					return res.json();
				}
			}).then(res => setConfirmed(`Username: ${res.user} is taken`));
		} else {
			setConfirmed("Passwords do not match.");
		}
	}
	return (
		<div className="main">
			<div className="section">
				<h1>Login</h1>
				<div className="center">
					<form onSubmit={confirmLogin}>
						<div>
							<div>
								<input name="username" type="text" placeholder="Username" required />
								<input name="password" type="text" placeholder="Password" required />
							</div>
							<button>Login</button>
						</div>
					</form>
				</div>
				<div className="center">
					<a href="#">Forgot Password</a>
				</div>
			</div>
			<div className="section">
				<h1>Register</h1>
				<div className="center">
					<form onSubmit={registerAccount} method="get">
						<div>
							<div>
								<input name="username" type="text" placeholder="Username" required />
								<input name="password" type="text" placeholder="Password" required />
								<input name="confirm-password" type="text" placeholder="Comfirm Password" required />
							</div>
							<button>Register</button>
						</div>
					</form>
				</div>
				<div id="password">
					{<div className="center-absolute"><p>{confirmed}</p></div>}
				</div>
			</div>
		</div>
	);
}

export default Login;