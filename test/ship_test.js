"use strict";

var expect = require('chai').expect;

describe('checkForShip', function () {  // this is a suite
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	var player;

	//mocha function before()
	before(() => {
		player = {
			ships: [
				{
					locations: [[0, 0], [1,1]],
					damage: []
				},
				{
					locations: [[0, 1], [2,1]],
					damage: []
				},
				{
					locations: [[0, 3], [1,3], [2,3]],
					damage: []
				}
			]
		};

	});

	it('should correctly report no ship at a given player\'s coordinate', () => {  //this is a spec
		
		
		expect(checkForShip(player, [9, 9])).to.be.false;
	})

	it('should correctly report a ship located at the given coordinates', function () {
		
		
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
	});

	it('should handle ships located at more than one coordinate', function () {
				
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	it('should handle checking multiple ships', function () {
				
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [0, 3])).to.deep.equal(player.ships[2]);
		expect(checkForShip(player, [1, 3])).to.deep.equal(player.ships[2]);
		expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
		expect(checkForShip(player, [9, 9])).to.be.false;
	});
});

describe('damageShip', () => {
	var damageShip = require('../game_logic/ship_methods').damageShip;

	it("should register damage on a given ship at a given location", () => {
		var ship = {
			locations: [[0,0]],
			damage: []
		}

		damageShip(ship, [0,0]);

		expect(ship.damage).to.not.be.empty;
		expect(ship.damage[0]).to.deep.equal([0,0]);
	})
});

describe('fire', () => {
	var fire = require('../game_logic/ship_methods').fire;
	var player;

	//mocha function beforeEach()
	beforeEach(() => {
		player = {
			ships: [
				{
					locations: [[0, 0], [1,1]],
					damage: []
				},
				{
					locations: [[0, 1], [2,1]],
					damage: []
				},
				{
					locations: [[0, 3], [1,3], [2,3]],
					damage: []
				}
			]
		};

	});

	after(() => {
		console.log('entire test suite completed');
	})

	afterEach( () => {
		console.log('one test completed')
	})

	it("should attempt to hit a ship at a given coordinate", () => {

		fire(player, [0,0]);

		expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
	})

	it("should NOT record damage after a fire attemp", () => {

		fire(player, [9,9]);

		expect(player.ships[0].damage).to.be.empty;
	})
})