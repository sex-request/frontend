/** @type {import('next').NextConfig} */
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://sex-request.github.io/frontend/';

function useEsbuildMinify(config, options) {
	const { minimizer } = config.optimization;
	const terserIndex = minimizer.findIndex(
		minifier => minifier.constructor.name === 'TerserPlugin',
	);
	
	minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options));
}

function useEsbuildLoader(config, options) {
	const { rules } = config.module;
	const rule = rules.find(rule => rule.test.test('.ts'));

	rule.use = {
		loader: 'esbuild-loader',
		options,
	};
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	images: {
    loader: 'imgix',
    path: isProduction ? productionURL : '/',
  },
  assetPrefix: isProduction ? productionURL : '',
  webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				React: 'react',
			}),
		);

		useEsbuildMinify(config);
		useEsbuildLoader(config, {
			// Specify `tsx` if you're using TypeScript
			loader: 'tsx',
			target: 'es2017',
		});

		return config;
	},
});
