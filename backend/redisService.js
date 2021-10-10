import Redis from "ioredis";
import JSONCache from "redis-json";
import { options } from "./constant.js";

const redis = new Redis();
const jsonCache = new JSONCache(redis);

export const updateRedisVotesData = async (data) => {
  await jsonCache.set(`options`, data);

  return data;
};

/*When there is no data in redis, it sends the data in the constant to the client*/
export const getRedisVotesData = async (cb) => {
  let result = await jsonCache.get("options");

  if (result) {
    return cb(result);
  }

  return cb(options);
};
