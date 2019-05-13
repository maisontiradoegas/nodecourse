// Object Property Shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);

//Object destructuring extract object properties and their values into individual variables that store property values.
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 8
}

// const label = product.label
// const stock = product.stock

//Destructuring Syntax
const { label:productLabel, stock, rating = 5 } = product
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type,label,stock);
}

transaction('order', product)