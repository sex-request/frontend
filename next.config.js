/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://sex-request.github.io/frontend/';
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    loader: 'imgix',
    path: isProduction ? productionURL : 'http://localhost:3000/',
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
