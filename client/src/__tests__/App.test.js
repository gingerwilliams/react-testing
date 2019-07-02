const App = require('../components/App');

test('<App />', () => {
    expect(true).toBeTruthy();
});

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