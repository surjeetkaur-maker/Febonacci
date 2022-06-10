const FebonaccitoTest = require('./febonaccitotest');
test("Passing of negative integer", () => {
    // arrange and act
    var result = FebonaccitoTest.checkfeb(-1)
    
    // assert
    expect(result).toBe('Please enter a positive integer.');
    });