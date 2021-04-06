import React from 'react';

export default function History() {
	const info = fetch("http://localhost:9000/history")
	.then((res) => res)
	.catch((err) => console.log(err));
	return (
		<div>History</div>
	);
}