import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://us1-smart-basilisk-40872.upstash.io',
  token: 'AZ-oASQgYjQwZjQ3ZDgtMzg2YS00ZTRlLTg2OTMtNTQ3ZmMyNjFlNDVlNjc2Mjk4ZjQ5YzE0NDVmZjljMzQ5OTM3OTNmZTZjYjk=',
})

const data = await redis.set('foo', 'bar');