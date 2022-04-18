const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    publicPath: '/answer-app',
    chainWebpack: config => {
        // 配置别名
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        // 配置移动端适配
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
}
