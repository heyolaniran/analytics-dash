import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-smart-basilisk-40872.upstash.io',
  token: process.env.REDIS_TOKEN!,
})
