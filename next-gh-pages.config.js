const debug = process.env.NODE_ENV !== 'production'
const name = 'saemmulter'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}
