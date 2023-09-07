/** @type {import('next').NextConfig} */
/* const nextConfig = {
    output: 'export'
}

module.exports = nextConfig */

const repo = 'bkinaan.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}
