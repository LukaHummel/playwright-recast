import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()
const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath: '/playwright-recast',
  images: { unoptimized: true },
  turbopack: { root: projectRoot },
}

export default withMDX(config)
