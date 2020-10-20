(async () => {
const db = require("./crud");

console.log("insert")
const insert = await db.insertProduct({name:"garfo", description:"garfo de cozinha", price: 20})

console.log("update")
const update = await db.updateProduct(4,{name:"a", description:"update", price:22, })

console.log("select")
const product = await db.selectProduct();

console.log("delete")
const deleteProduct = await db.deleteProduct(9);

console.log(product);

})();