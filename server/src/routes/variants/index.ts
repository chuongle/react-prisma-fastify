import { FastifyPluginAsync } from 'fastify';

import getVariant from './get';

const getVariants: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return fastify.prisma.itemVariant.findMany();
  });

  await fastify.register(getVariant);
}

export default getVariants;
