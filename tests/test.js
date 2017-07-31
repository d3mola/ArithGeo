// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("Arithmetic or Geometric arithGeo", function() {

	describe("handle valid input", function() {
		it("should return Arithmetic as arithGeo for [1, 2, 3, 4, 5]", function() {
			assert.equal(myApp.arithGeo([1, 2, 3, 4, 5]), Arithmetic);
		});

		it("should return Arithmetic as arithGeo for [8, 6, 4, 2]", function() {
			assert.equal(myApp.arithGeo([8, 6, 4, 2]), Arithmetic);
		});

		it("should return Arithmetic as arithGeo for [5, 10, 15, 20]", function() {
			assert.equal(myApp.arithGeo([5, 10, 15, 20]), Arithmetic);
		});

		it("should return Geometric as arithGeo for [-1, -3, -9, -27]", function() {
			assert.equal(myApp.arithGeo([-1, -3, -9, -27]), Geometric);
		});

		it("should return Geometric as arithGeo for [54, 18, 6, 2]", function() {
			assert.equal(myApp.arithGeo([54, 18, 6, 2]), Geometric);
		});

		it("should return Geometric as arithGeo for [-2, -8, -32, -128]", function() {
			assert.equal(myApp.arithGeo([-2, -8, -32, -128]), Geometric);
		});

		it("should return 0 as arithGeo for []", function() {
			assert.equal(myApp.arithGeo([]), 0);
		});

		it("should return -1 as arithGeo for [1, 3, 4, 6]", function() {
			assert.equal(myApp.arithGeo([1, 3, 4, 6]), -1);
		});

		it("should return -1 as arithGeo for [-4, 5, 6]", function() {
			assert.equal(myApp.arithGeo([-4, 5, 6]), -1);
		});

		it("should return -1 as arithGeo for [6, 2, 1]", function() {
			assert.equal(myApp.arithGeo([6, 2, 1]), -1);
		});
	})

	describe("handle invalid input", function() {
		it("should return undefined as arithGeo for empty input", function() {
			assert.equal(myApp.arithGeo(), undefined);
		});

		it("should return undefined as arithGeo for non-arrays", function() {
			assert.equal(myApp.arithGeo(false), undefined);
		});


	})
})