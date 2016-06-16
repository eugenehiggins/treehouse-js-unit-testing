var checkForShip = function (player, coords){
	// the player parameter contains a ships array

	var shipPresent, ship;

	for (ship of player.ships) {

		shipPresent = ship.locations.filter( (actualCoordinate) => {
			return (actualCoordinate[0] === coords[0] && (actualCoordinate[1] === coords[1]))
		})[0];		// the first member of an empty array is `undefined`, which is what we're checking for, hence the `[0]`


		if(shipPresent) {
			return ship;
		} 
	}
	return false;
}

var damageShip = (ship,coordinates) => {
	ship.damage.push(coordinates);
}

var fire = (player,coordinates) => {

	var ship = checkForShip(player,coordinates);

	if (ship) {
		damageShip(ship,coordinates);
	}
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip 	= damageShip;
module.exports.fire 		= fire;