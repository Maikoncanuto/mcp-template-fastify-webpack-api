'use strict'

const CustomerService = require('../../services/customers');

const getCustomer = {
  method: 'GET',
  url: '/customers',
  schema: {
    response: {
      200: {
        type: 'string'
      }
    }
  },
  preHandler: async (request, reply) => {},
  handler: async (request, reply) => {
    return CustomerService.getName();
  }
}

module.exports = {
  getCustomer,
};