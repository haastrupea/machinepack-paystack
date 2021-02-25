const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Update Page',

  description: 'Update a payment page details on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_slug: {
      example: ' 5nApBwZkvY',
      description: 'The page ID or slug you want to fetch'
    },
    name: {
      example: 'Johnson',
      description: 'name of Page',
      required: true
    },
    description: {
      example: 'new page',
      description: 'A description for this page'
    },
    amount: {
      example: 20000,
      description: 'Default amount you want to accept using this page. If none is set, customer is free to provide any amount of their choice. The latter scenario is useful for accepting donations'
    },
    active: {
      example: true,
      description: 'Set to false to deactivate page url'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id_or_slug, ...bodyParams }, exits) {
    makeRequest(`/page/${id_or_slug}`,
      {
        method: 'PUT',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((updatedpage) => {
      return exits.success(updatedpage)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
