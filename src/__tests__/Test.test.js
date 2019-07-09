import { add, total } from '../components/Test';

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





