import Redis from "ioredis";
import JSONCache from "redis-json";
import { options } from "./constant.js";
const redis = new Redis();
const jsonCache = new JSONCache(redis);

export const updateRedisVotesData = async (data) => {
  await jsonCache.set(`options`, data);
  // for (var d in data) {
  //   await jsonCache.set(`vote${d}`, data[d]);
  // }
  return data;
};
// var keys =["jc:vote2_t",
// "jc:vote2",
// "jc:vote0",
// "jc:vote1",
// "jc:vote0_t",
//  "jc:vote1_t"]
//var keys = ["vote0", "vote1", "vote2"];

export const getRedisVotesData = async (cb) => {
  let result = await jsonCache.get("options");
  // var voteList = [];
  // for (var index in keys) {
  //   // console.log("index",index)
  //   let result = await jsonCache.get(keys[index]);
  //   //console.log(result);
  //   voteList.push(result);
  // }
  // if (voteList[0] !== undefined) {
  //   console.log("voteList.length", voteList[0]);
  //   return cb(voteList);
  // }return cb(options);};
  if (result) {
    return cb(result);
  }

  return cb(options);
};
