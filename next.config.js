const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org/t/p/original'
            }
        ],
    }
}

module.exports = nextConfig
