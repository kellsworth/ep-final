let orderNum = 0;
let cartArr= [];

module.exports = {
  addToCart: async (req, res) => {
    const { id } = req.session.user
    const { cartInput } = req.body
    const db = req.app.get('db')

    const newList = await db.cart.add_to_cart({ id, cartInput })
    res.status(201).send(newList)
    // need to change above response //
  },
 
  getCart: async (req, res) => {
    console.log(req.session.user)
    const { id } = req.session.user
    const db = req.app.get('db')

    const newCartList = await db.cart.get_cart(id)
    res.status(201).send(newCartList)
  },
 
    deleteCart: async (req, res) => {
      const { id } = req.session.user
      console.log(id)
      const { itemId } = req.params
      const db = req.app.get('db')

      const newList = await db.cart.delete_cart(itemId, id)
      res.status(200).send(newList)
      
    },

    updateOrder: (req, res) => {
      const { orderId } = req.params;
      const { name } = req.body;
      cartArr.forEach((order, index) => {
        if (+orderId === order.id) {
          cartArr[index].nameInput = name;
        }
      })
      res.sendStatus(200)
    },
  
    clearCart: (req, res) => {
      cartArr = []
      res.sendStatus(200)
    }
} 

