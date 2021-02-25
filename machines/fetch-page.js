const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Fetch Page',

  description: 'Get details of a payment page on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_slug: {
      example: ' 5nApBwZkvY',
      description: 'The page ID or slug you want to fetch'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id_or_slug }, exits) {
    makeRequest(`/page/${id_or_slug}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((page) => {
      return exits.success(page)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
