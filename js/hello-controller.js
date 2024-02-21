import mustache from "mustache";
import helloModel from "./hello-model.js";
import { generateElements } from "./utils.js";

function getTemplate(path) {
	return fetch(path).then(response => response.text());
}

async function serve() {
	const testData = await helloModel.getTestData();
	const template = await getTemplate("templates/hello.mustache");
	const markup = mustache.render(template, { items: testData });
	const markupEl = generateElements(markup);
	document.querySelector(".list").append(...markupEl);
}

function init() {
	serve();
}

export default { init };
