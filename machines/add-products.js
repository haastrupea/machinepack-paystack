const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Add Products',

  description: 'Add products to a payment page',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      example: 102859,
      description: 'Id of the payment page'
    },
    product: {
      example: [],
      description: 'Ids of all the products'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id, product }, exits) {
    makeRequest(`/page/${id}/product`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        method: 'POST',
        body: JSON.stringify(product)
      }).then((pageProduct) => {
      return exits.success(pageProduct)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
