function generateElements(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.children;
}

export { generateElements };
