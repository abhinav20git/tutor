import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    });
  
    config.plugins.push(new MiniCssExtractPlugin());
  
    return config;
  }
  
};

export default nextConfig;
