/* eslint-disable @typescript-eslint/no-var-requires */

const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
  baseUrl: 'https://stevensignal.ai',
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: [
    'js',
    'map',
    'json',
    'xml',
    'ts',
    'css',
    'scss',
    'png',
    'jpg',
    'jpeg',
    'icon',
    'svg',
  ],
  ignoredPaths: ['404', 'favicon', 'index'],
})
