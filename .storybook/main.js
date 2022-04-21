const path = require('path');

const _public = path.resolve(__dirname, '../public');

module.exports = {
    "stories": ["../components/**/*.stories.tsx"],
    // "stories": ['../components'],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss"
    ],
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    "typescript": { "reactDocgen": false },
    webpackFinal: config => {
        // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack'),
        });

        config.resolve.roots = [__dirname, _public];

        return config;
    }
}