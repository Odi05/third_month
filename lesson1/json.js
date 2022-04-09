// формат JSON

// const product = {
//     id: 1,
//     price: 2000,
//     name: "iphone"
// }
//
// const jsonproduct = JSON.stringify(product);
//
// console.log(product)
// console.log(jsonproduct)
//
// localStorage.setItem('products', jsonproduct)
//
// const data = localStorage.getItem("products")
//
// console.log(JSON.parse(data));

const pp = {
    id: 2,
    price: 2000,
    name: "iphone"
}

const jsonpp = JSON.stringify(pp);

console.log(jsonpp)
console.log(pp)

console.log(JSON.parse(jsonpp));