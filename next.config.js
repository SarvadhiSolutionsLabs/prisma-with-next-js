/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: "/",
  },
  images: {
    // domains: ["localhost:3000/"],
    // loader: "imgix",
    // path: "http://localhost:3000/pages/images/",
  },
  rules: [
    {
      test: /\.s?css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        "sass-loader",
      ],
      include: /\.s?css$/,
    },
  ],
};

module.exports = nextConfig;
