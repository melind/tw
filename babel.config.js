
module.exports = {

  presets: [
    "@babel/env",
    "@babel/react",
    "@babel/preset-typescript",
    "@babel/register"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ],
  env: {
    dev: {
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "transform-decorators-legacy",
        "transform-class-properties"
      ]
    },
    build: {
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "transform-decorators-legacy",
        "transform-class-properties"
      ]
    },
    production: {
      presets: [
        [
          "minify", // why add minify here, we run uglify over the whole code bundles
          {
            mangle: false,
            evaluate: false
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ],
      comments: false,
      compact: true,
      minified: true
    }
  }
};