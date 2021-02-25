const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Subaccount',

  description: 'Create a subacount on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    business_name: {
      example: 'sailscasts',
      description: 'Name of business for subaccount'
    },
    settlement_bank: {
      example: '044',
      description: 'Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.'
    },
    account_number: {
      description: 'Bank Account Number',
      example: '0193274682'
    },
    percentage_charge: {
      example: 18.2,
      description: 'The default percentage charged when receiving on behalf of this subaccount'
    },
    description: {
      example: 'for misc',
      description: 'A description for this subaccount'
    },
    primary_contact_email: {
      example: 'customer@example.com',
      description: 'A contact email for the subaccount'
    },
    primary_contact_name: {
      example: 'John doe',
      description: 'A name for the contact person for this subaccount'
    },
    primary_contact_phone: {
      example: '23498373646464',
      description: 'A phone number to call for this subaccount'
    },
    metadata: {
      example: '{"custom_fields":[{"display_name":"Cart"}]}',
      description: 'Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/subaccount',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((createdsubAccount) => {
      return exits.success(createdsubAccount)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
