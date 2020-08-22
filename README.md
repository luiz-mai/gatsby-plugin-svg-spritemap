# gatsby-plugin-svg-spritemap
Gatsby plugin to generate a SVG spritemap on build time using svg-spritemap-webpack-plugin

## Usage
In your `gatsby-config`, include:

```node
module.exports = {
    plugins: [
        ...
        "gatsby-plugin-svg-spritemap"
    ],
}
```

To specify a filename pattern, you can pass them as a string or an array of strings under the `pattern` option. The plugin also accepts all the other options available to the webpack plugin, so you can include them as well.

For more details on the available options, check the **[original plugin documentation](https://github.com/cascornelissen/svg-spritemap-webpack-plugin/blob/HEAD/docs/options.md)**.

```node
module.exports = {
  plugins: [
        ...
        {
            resolve: "gatsby-plugin-svg-spritemap",
            options: {
                pattern: ["./src/icons/*.svg", "./src/icons/**/*.svg"],
                output: {
                    filename: `icons/sprite.svg`,
                },
                sprite: { prefix: false },
            }
        }
  ],
}
```