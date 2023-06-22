import * as Yup from 'yup'
import Product from '../models/Product'

class ProductController {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required(),
        path: Yup.string().required(),
      })

      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({ error: err.errors })
      }

      const { name, price, path } = request.body

      const product = await Product.create({
        name,
        price,
        path,
      })

      return response.json(product)
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const products = await Product.findAll({})

    return response.json(products)
  }
}

export default new ProductController()
