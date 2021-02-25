const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Update Product',

  description: 'Update a product details on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      example: ' 526',
      description: 'The product ID'
    },
    name: {
      example: 'John',
      description: 'The name of product',
      required: true
    },
    description: {
      example: 'new product',
      description: 'A description for this product',
      required: true
    },
    price: {
      example: 20000,
      description: 'Price should be in kobo if currency is NGN and pesewas for GHS',
      required: true
    },
    currency: {
      example: 'NGN',
      description: 'Currency in which price is set',
      required: true
    },
    limited: {
      example: true,
      description: 'Set to true if the product has limited stock. Leave as false if the product has unlimited stock'
    },
    quantity: {
      example: 50,
      description: 'Number of products in stock. Use if limited is true'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/product/${id}`,
      {
        method: 'PUT',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((updatedproduct) => {
      return exits.success(updatedproduct)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
