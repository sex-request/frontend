/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://sex-request.github.io/frontend/';
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : 'http://localhost:3000/',
  },
  assetPrefix: isProduction ? productionURL : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
