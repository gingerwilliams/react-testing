import { add, total } from '../components/Test';

//Mock Function
//const mock = jest.fn(callback function);

//unit test
//It only tests one thing
test('add', () => {
    // const value = add(2, 3)
    // expect(value).toBe(5);
    expect(add(2, 3)).toBe(5);
    expect(add).toHaveBeenCalledTimes(1);
});

//integration test
//test things working together
test('total', () => {
    expect(total(5, 20)).toBe('$25');
});

// Mock functions, test that function when we dont
// have access to that live function like database 
// calls



