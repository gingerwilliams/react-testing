//Unit
export const add = (x, y) => x + y;

//Integration - relies on add to work
export const total = (shipping, subTotal) => {
    return `$${add(shipping, subTotal)}`;
}

