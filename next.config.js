/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["s3.eu-north-1.amazonaws.com"],
	},
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
};

module.exports = {
	nextConfig,
};
