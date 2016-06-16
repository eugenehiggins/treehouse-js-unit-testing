"use strict"

var expect = require('chai').expect;

expect(true).to.be.true;

var titleCase = (title) => {
	let words = title.split(" ");
	
	//title[0].toUpperCase() + title.substring(1);

	words.forEach((word,index,words) => {

		words[index] = word[0].toUpperCase() + word.substring(1);
	});

	return words.join(' ');
}

// var titleCase = function (){

// }

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('a')).to.equal('A');

expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');