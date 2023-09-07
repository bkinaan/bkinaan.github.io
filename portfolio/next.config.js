/** @type {import('next').NextConfig} */
/* const nextConfig = {
    output: 'export'
}

module.exports = nextConfig */

/* const repo = 'bkinaan.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}
