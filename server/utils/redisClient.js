const { createClient } = require("redis");
const redisClient = createClient({
    url: process.env.REDIS_URL
});

const redisSetup = async () => {
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    await redisClient.connect();
};

module.exports = { redisSetup, redisClient };
