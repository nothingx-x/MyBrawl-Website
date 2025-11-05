import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ugvxlsnnuutbpy2w.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
