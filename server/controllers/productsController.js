

module.exports = {
getAllProducts: async (req, res) => {
const db = req.app.get('db');
const productsList = await db.products.get_all_products();
res.status(200).send(productsList)
}

}