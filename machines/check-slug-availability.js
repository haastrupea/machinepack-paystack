const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Check Slug Availability',

  description: 'Check the availability of a slug for a payment page.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    slug: {
      example: '5nApBwZkvY',
      description: 'URL slug to be confirmed'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, slug }, exits) {
    makeRequest(`/page/check_slug_availability/${slug}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((pageSlug) => {
      return exits.success(pageSlug)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
