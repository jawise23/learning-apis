const url = "https://api.chucknorris.io/jokes/random";

async function Norrisify() {
	const resp = await fetch(url);
	const data = await resp.json();
	return (
		<div>
			<h1>data.value</h1>
		</div>
	);
}

export default Norrisify;
