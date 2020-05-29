// 新增一隻名為 vue.config.js 的檔案在專案的根目錄

const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery',
            }),
        ],
    },
};

// module.exports = {
//     devServer: {
//         open: process.platform === 'darwin',
//         host: '0.0.0.0',
//         port: 8080, // CHANGE YOUR PORT HERE!
//         https: true,
//         hotOnly: false,
//     },
// }