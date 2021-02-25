const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Page',

  description: 'Create a payment page on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
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
      description: 'Amount should be in kobo if currency is NGN and pesewas for GHS'
    },
    slug: {
      example: 'johnson-page',
      description: 'URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]'
    },
    metadata: {
      type: 'ref',
      example: {},
      description: 'Extra data to configure the payment page including subaccount, logo image, transaction charge'
    },
    redirect_url: {
      example: 'https://example.com/redirect_url',
      description: 'If you would like Paystack to redirect someplace upon successful payment, specify the URL here.'
    },
    custom_fields: {
      type: 'ref',
      example: [{}],
      description: 'If you would like to accept custom fields, specify them here. See sample code for details'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/page', {
      method: 'POST',
      headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
      body: JSON.stringify(bodyParams)
    }).then((createdPage) => {
      return exits.success(createdPage)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
