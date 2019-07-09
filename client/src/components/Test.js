//Unit
export const add = (x, y) => x + y;

//Integration - relies on add to work
export const total = (shipping, subTotal) => {
    return `$${add(shipping, subTotal)}`;
}

// React integration test - a component that renders another component

