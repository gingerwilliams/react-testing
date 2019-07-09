## Dependencies
-   jest
-   @types/jest
-   react
-   react-dom
-   webpack
-   webpack-cli
-   webpack-dev-server

## Possible Dependencies
-   react-testing-library //Depricated use @testing-library/react instead
-   enzyme
-   enzyme-adapter-react-16
-   jest-enzyme


# Testing Notes

## Jest

`describe(name, fn)` creates a block that groups together several related tests in one "test suite".

`it()`: is aliased by `test()` so it does the same thing, this is a unit test itself. Usually you name it something like `it('', ('should do something') => {})`  so that it reads as a natural sentence. 

So you would group multiple `its` under one `describe`.
"[Thing] [does]." Put the noun in the describe, put the rest of the sentence in the test.

```
describe('my application', () => {
  test('should not crash', () => {});
});
```

-   Does it really make sense to say "should not crash" by itself? 
-   What should not crash?
-   Write a sentence for what you are testing

This gives you a bunch of new options, if you want to only run a group of tests, you can write describe.only (or it.only for a single test). You can add .skip instead of .only to skip a bunch of tests. Finally you can add beforeEach/afterEach hooks to run before or after each test in a describe block.

`afterAll();`  After all tests are run
beforeAll();
afterEach();
beforeEach();

## React Testing Library
https://testing-library.com/docs/react-testing-library/intro
https://www.npmjs.com/package/@testing-library/react

Encourages writing tests that use your components as the end users do.



// Fully Isolated piece of code
// eg. Testing one function
// Unit Test
// With Dependencies
// eg. testing a function that calls a function
// Integration Test
// Full Flow (UI)
// eg. validating a DOM after a click
// End-to-End Test

// https://jestjs.io/docs/en/api Globals
// expect assertions
//Mock data "fake info for faster tests"
//snapshots 

//*****Test.js
//Unit
export const add = (x, y) => x + y;

//Integration - relies on add to work
export const total = (shipping, subTotal) => {
    return `$${add(shipping, subTotal)}`;
}

// React integration test - a component that renders another component


//*****TEST.test.js
//unit test
//It only tests one thing
test('add', () => {
    const value = add(2, 3)
    expect(value).toBe(5);

    // expect(add(2, 3)).toBe(5);
});

//integration test
//test things working together
test('total', () => {
    expect(total(5, 20)).toBe('$25');
});

// Mock functions, test that function when we dont
// have access to that live function like database 
// calls

//Mock Function
//const mock = jest.fn(callback function);
const mock = jest.fn(() => 5);

test('mock', () => {
    expect(mock(2, 3)).toBe(5);
    // true because the mock function above called one time (API call example use)
    expect(mock).toHaveBeenCalledTimes(1);
    //React example check if the function was called 
    //Check if the function was called with the proper arguments
    expect(mock).toHaveBeenCalledWith(2, 3);

});

//-------

const nameMe = (name) => {
    return { name: name }
}

const divide = (x, y) => {
    if (y === 0) {
        throw new Error('You can not divide by zero');
    }
    return x / y;
}

//toEqual for object equality
test('Should Return an Object with a passed Name', () => {
    const result = nameMe('John');
    expect(result).toEqual({
        name: 'John'
    })
});

test('divide', () => {
    const result = divide(6, 3);
    //why bind?
    expect(divide.bind(null, 10, 0)).toThrowError();
    expect(result).toBe(2);
});