import { FastifyPluginAsync } from 'fastify';

import getCategory from './get';

const getCategories: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return await fastify.prisma.category.findMany();
  });

  await fastify.register(getCategory);
}

export default getCategories;
