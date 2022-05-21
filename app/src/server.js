

const fastify = require('fastify')({ logger: true });
const { getCustomer } = require('./controllers/customers');

fastify.route(getCustomer);

const start = async () => {
    try {
        await fastify.listen(3000)
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
};

start();