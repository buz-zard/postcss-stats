module.exports = {
  presets: [['@babel/preset-env', { targets: { node: '6' } }]],
  plugins: [['babel-plugin-add-module-exports', { addDefaultProperty: true }]],
};
