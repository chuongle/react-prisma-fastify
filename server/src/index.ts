import Fastify, { FastifyInstance } from 'fastify';
import path from 'node:path';

import fastifyAutoload from '@fastify/autoload';

const server: FastifyInstance = Fastify({
  logger: true,
});

server.register(fastifyAutoload, {
  dir: path.join(__dirname, 'routes'),
  routeParams: true,
})

// Get port from env or fallback
const port = Number(process.env.PORT) || 8080
const host = '0.0.0.0' // or 'localhost'

server.ready().then(() => {
  console.log(server.printRoutes())
})
server.listen({ port, host }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`🚀 Server listening at ${address}`)
})
