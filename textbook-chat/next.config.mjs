/** @type {import('next').NextConfig} */
import fs from "fs";
import webpack from "./webpack.config.mjs";

const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));
nextConfig.webpack = webpack;

// set basePath if running on binderhub
const jp_prefix = process.env.JUPYTERHUB_SERVICE_PREFIX
if (jp_prefix !== undefined) {
    nextConfig.basePath = jp_prefix + "proxy/3000"
}

export default nextConfig;
