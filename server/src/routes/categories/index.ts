import { categories } from 'coffee-pos-mock-data';
import { FastifyPluginAsync } from 'fastify';

import getCategory from './get';

const getCategories: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return categories.categories;
  });

  await fastify.register(getCategory);
}

export default getCategories;
