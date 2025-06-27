import { categories } from 'coffee-pos-mock-data';
import { FastifyPluginAsync } from 'fastify';

const getCategory: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Params: {
      categoryId: string,
    }
  }>('/:categoryId', async function (request, reply) {
    const { categoryId } = request.params;

    if (!categoryId) {
      return reply.code(404).send({ error: `Category ${categoryId} not foud` });
    }

    const category = categories.categories.find(c => c.categoryId === categoryId);

    if (!category) {
      return reply.code(404).send({ error: `Category ${categoryId} not foud` });
    }

    return category;
  })
}

export default getCategory;
