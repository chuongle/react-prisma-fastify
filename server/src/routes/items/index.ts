import { FastifyPluginAsync } from 'fastify';

import getItem from './get';

const getItems: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return await fastify.prisma.item.findMany();
  });

  await fastify.register(getItem);
}

export default getItems;
