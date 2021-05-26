let orderNum = 0;
let cartArr= [];

module.exports = {
  addToCart: async (req, res) => {
    const { id } = req.session.user
    const { productId, quantity } = req.body
    const db = req.app.get('db')
    console.log(id, productId, quantity)

    const newList = await db.cart.add_to_cart([id, productId, quantity])
    res.status(200).send(newList)
  },
 
  getCart: async (req, res) => {
    console.log(req.session.user)
    const { id } = req.session.user
    const db = req.app.get('db')

    const newCartList = await db.cart.get_cart(id)
    res.status(200).send(newCartList)
  },
 
    deleteCartItem: async (req, res) => {
      const { id } = req.session.user
      console.log(id)
      const { itemId } = req.params
      const db = req.app.get('db')

      const newList = await db.cart.delete_cart([itemId, id])
      res.status(200).send(newList)
      
    },

    updateQuantity: async (req, res) => {
      const { quantity } = req.body;
      const { itemId } = req.params;
      const { id } = req.session.user
      const db = req.app.get('db')

      const newList = await db.cart.update_quantity([quantity, itemId, id])
      res.status(200).send(newList)
    },
  
    clearCart: async (req, res) => {
      const { id } = req.session.user
      const db = req.app.get('db')

      const responseList = await db.cart.clear_cart([id])
      console.log(responseList)
      res.status(200).send(responseList)
    }
} 

