import * as redis from "redis";
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_POST,
});

// import Redis from "ioredis";
// const client = new Redis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_POST,
// });
export default client;
