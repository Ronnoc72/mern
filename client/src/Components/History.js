import React, {useState, useEffect} from 'react';
import "../styles/history.css";

export default function History() {
	const [documents, setDocuments] = useState("");
	useEffect(() => {
      	loadInfo();
   	}, []);
	const loadInfo = async () => {
		const info = await fetch(`http://localhost:9000/history/${localStorage.username}`)
		.then((res) => res.json()).then(res => res.history)
		.catch((err) => console.log(err));
		let docs = [];
		for (let obj in info) {
			docs.push(info[obj].title);
		}
		setDocuments(docs.map(item => {
			let realItem = item;
			if (item.length > 9) {
				realItem = "";
				for (let i = 0; i < 8; i++) {
					realItem += item[i]
				}
				realItem += "..."
			}
			return <div onClick={() => {
				window.location.href = `http://localhost:3000/newfile/${item}`;
				localStorage.fileID = docs.indexOf(item);
			}} className="document" key={item}><p>{realItem}</p></div>
		}));
	}
	return (
		<div>
			<div className="documents">
				{documents}
			</div>
		</div>
	);
}