import { add } from '../components/Test';

test('add', () => {
    const value = add(2, 3)
    expect(value).toBe(5);
});