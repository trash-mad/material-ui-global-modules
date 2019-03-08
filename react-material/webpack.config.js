module.exports = {
  entry: './index.js',
  output: {
    library: 'MaterialUi',
    libraryTarget: 'umd',
    filename: 'materialui.min.js',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  }
}