const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');

describe ('fizzBuzzer' , function(){

	it('should give fizz', function(){

		const fizzCases = [3,6,9];
		fizzCases.forEach(function(input){

			const answer = fizzBuzzer(input);
			answer.should.equal('fizz');
		});
	});

	it('should give buzz', function(){

		const buzzCases = [5,10,20];
		buzzCases.forEach(function(input){

			const answer = fizzBuzzer(input);
			answer.should.equal('buzz');
		});
	});

	it('should give fizz-buzz', function(){

		const fizzBuzzCases = [15,30,45];
		fizzBuzzCases.forEach(function(input){

			const answer = fizzBuzzer(input);
			answer.should.equal('fizz-buzz');
		});
	});

	it('should give number', function(){

		const numberCases = [1, 2, 4];
		numberCases.forEach(function(input){

			const answer = fizzBuzzer(input);
			answer.should.equal(input);
		});
	});

	it('should raise error if args not numbers', function() {
    
    	const badInputs = [ 'a' , false , null ];
    
    	badInputs.forEach(function(input) {
      		(function() {
          	fizzBuzzer(input);
      		}).should.throw(Error);
    	});
  	});
});
