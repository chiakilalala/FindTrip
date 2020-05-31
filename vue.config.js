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
    devServer: { //
        hotOnly: false,
        disableHostCheck: true, //此选项绕过主机检查
        // chainWebpack: config => {
        //     // 修复HMR
        //     config.resolve.symlinks(true);
        // }
    },

};



// module.exports = {
//     devServer: {
//         open: process.platform === 'darwin',
//         Host: 'localhost',
//         port: 8080, // CHANGE YOUR PORT HERE!
//         https: false,
//         hotOnly: false,
//         disableHostCheck: true
//     },
// }