import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 开启fetch缓存日志,
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
};

export default nextConfig;
