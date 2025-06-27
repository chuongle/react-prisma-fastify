import { FastifyPluginAsync } from 'fastify';

const getVariant: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Params: {
      variantId: string,
    }
  }>('/:variantId', async function (request, reply) {
    const { variantId } = request.params;

    if (!variantId) {
      return reply.code(404).send({ error: `Item ${variantId} not foud` });
    }

    const variant = await fastify.prisma.itemVariant.findUnique({ where: { variantId } });

    if (!variant) {
      return reply.code(404).send({ error: `Item ${variantId} not foud` });
    }

    return variant;
  })
}

export default getVariant;
