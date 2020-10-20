
async function Connect() {

    //status db
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    //connection with db
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/bella_face")
    //global connection
    global.connection = connection;
    
    return connection;
}

async function selectProduct(){
    const conn = await Connect();
    const [rows] = await conn.query("SELECT * FROM product;");
    return rows;
}

async function insertProduct(costumer){
    const conn = await Connect();
    const sql = "INSERT INTO product(name, description, price) VALUES (?,?,?);";
    const values = [costumer.name, costumer.description, costumer.price]
    await conn.query(sql, values);

}
 async function updateProduct(id, costumer){
    const conn = await Connect();
    const sql = "UPDATE product SET name=?, description=?, price=? WHERE id=4";
    const values = [costumer.name, costumer.description, costumer.price, id]
    await conn.query(sql, values);

 }

async function deleteProduct(id){
    const conn = await Connect();
    const sql = "DELETE FROM product where id=?;";
    await conn.query(sql, [id]);

}
module.exports = {selectProduct, insertProduct, updateProduct, deleteProduct}
