const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Fetch Product',

  description: 'Get details of a product on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      example: ' 526',
      description: 'The product ID you want to fetch'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id }, exits) {
    makeRequest(`/product/${id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((product) => {
      return exits.success(product)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
