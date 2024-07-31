import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1722309381916_9912',
  koa: {
    port: 22209,
  },
  cors: {
    origin: '*',
  },
} as MidwayConfig;
