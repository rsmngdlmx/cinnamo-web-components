const { expect } = require("chai");

describe("ci-hello-world web component", () => {
	before(() => { this.jsdom = require("global-jsdom")(); });

	after(() => { this.jsdom(); });

	it("renders the 'ci-hello-world' component and its content", () => {
		require("../../../../src/components/ci-hello-world/ci-hello-world.js");
		document.body.innerHTML = "<ci-hello-world></ci-hello-world>";
		const element = document.getElementsByTagName("ci-hello-world")[0];
		expect(element).to.exist;
		expect(element.textContent).to.equal("Hello, world!");
	});
});
