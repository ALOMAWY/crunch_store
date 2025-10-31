/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cranchstore.oneentry.cloud",
        port: "",
        pathname: "**",
      },
    ],
  },
  reactCompiler: true,
};


export default nextConfig;
