import redis from 'redis';
import { promisify } from 'util';

export const client = redis.createClient(),
  del = promisify(client.del).bind(client) as (key: string) => Promise<number>,
  hget = promisify(client.hget).bind(client) as (key: string, field: string) => Promise<string>,
  hset = promisify(client.hset).bind(client) as unknown as (
    key: string,
    ...args: string[]
  ) => Promise<number>;
