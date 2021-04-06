import React from 'react';
import "../styles/login.css";

function confirmLogin() {
	const info = fetch("http://localhost:9000/login")
	.then((res) => res)
	.catch((err) => console.log(err));
}

export default function Login() {
	return (
		<div className="main">
			<div className="login">
				<form>
					<input type="text" placeholder="Username" required />
					<input type="text" placeholder="Password" required />
				</form>
			</div>
			<div className="register">
				<form>
					<input type="text" placeholder="Username" required />
					<input type="text" placeholder="Password" required />
					<input type="text" placeholder="Comfirm Password" required />
				</form>
			</div>
		</div>
	);
}