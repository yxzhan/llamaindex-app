/** @type {import('next').NextConfig} */
import fs from "fs";
import webpack from "./webpack.config.mjs";

const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));
nextConfig.webpack = webpack;

// // set url prefix if running on binderhub
const jp_prefix = process.env.JUPYTERHUB_SERVICE_PREFIX
if (jp_prefix !== undefined) {
    // nextConfig.basePath = jp_prefix + "proxy/3000"
    nextConfig.assetPrefix = jp_prefix + "proxy/3000"
    process.env.NEXT_PUBLIC_CHAT_API = 'https://jupyter.intel4coro.de' + jp_prefix + "proxy/3000/api/chat"
}

export default nextConfig;
