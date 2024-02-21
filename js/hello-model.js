function fetchData(file) {
	return fetch(file).then(response => response.json());
}

async function getTestData() {
	const allData = await fetchData("data/hello-data.json");
	return allData;
}

export default { getTestData };
