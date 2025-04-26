import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		authInterrupts: true,
	},
	reactStrictMode: false,
}

export default nextConfig
