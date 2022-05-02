const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // Alias path config bug
  // https://github.com/storybookjs/storybook/issues/11989
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    // // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/"
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes("/css-loader/")) {
        item.options.modules = {
          mode: "local",
          localIdentName:
            configType === "PRODUCTION"
              ? "[local]__[hash:base64:5]"
              : "[name]__[local]__[hash:base64:5]",
        };
      }

      return item;
    });

    // // add SCSS support for CSS Modules
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });

    // config.module.rules.push({
    //   test: /\.s(a|c)ss$/,
    //   include: path.resolve(__dirname, "../"),
    //   use: [
    //     "style-loader",
    //     {
    //       loader: "css-loader",
    //       options: {
    //         modules: {
    //           auto: true,
    //           localIdentName: "[name]__[local]--[hash:base64:5]",
    //         },
    //       },
    //     },
    //     "sass-loader",
    //   ],
    // });

    return config;
  },
};
