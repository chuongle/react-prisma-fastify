import { FastifyPluginAsync } from 'fastify';

const getItem: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Params: {
      itemId: string,
    }
  }>('/:itemId', async function (request, reply) {
    const { itemId } = request.params;

    if (!itemId) {
      return reply.code(404).send({ error: `Item ${itemId} not foud` });
    }

    const item = await fastify.prisma.item.findUnique({ where: { itemId } });

    if (!item) {
      return reply.code(404).send({ error: `Item ${itemId} not foud` });
    }

    return item;
  })
}

export default getItem;
