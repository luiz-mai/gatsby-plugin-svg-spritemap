const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }, {
  pattern,
  input,
  output,
  sprite,
  styles
}) => {
  actions.setWebpackConfig({
    plugins: [
      new SVGSpritemapPlugin(pattern, {
        input,
        output,
        sprite,
        styles
      }),
    ],
  })
}
