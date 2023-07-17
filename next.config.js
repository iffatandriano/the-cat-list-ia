/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains: [
            'img.freepik.com',
            'cdn2.thecatapi.com',
        ]
    }
}

module.exports = nextConfig
