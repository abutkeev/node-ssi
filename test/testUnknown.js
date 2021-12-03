
var assert = require("assert");
var ssi = require("../index.js");

describe("unsupported directives", function() {
	var config = "<!--#config timefmt=\"%Y\" -->";

	it("it should output nothing when nothing is found", function() {
		var parser = new ssi("", "", "");
		var results = parser.parse("", config);
		
		assert.equal('unsupported directive config', results.contents);
	});
});

