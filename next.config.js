// /** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["s3.eu-north-1.amazonaws.com", "pbs.twimg.com/"],
		loader: "akamai",
		path: "",
	},
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
};
