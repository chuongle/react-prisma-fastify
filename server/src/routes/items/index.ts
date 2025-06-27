import { items } from 'coffee-pos-mock-data';
import { FastifyPluginAsync } from 'fastify';

import getItem from './get';

const getItems: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return items.items;
  });

  await fastify.register(getItem);
}

export default getItems;
