const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    publicPath: '/answer-app',
    devServer: {
        proxy: {
            '/dev-api': {
                target: 'http://api.hdblog.online',
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': ''
                }
            }
        }
    },
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
            },
            less: {
                globalVars: {
                    hack: `true; @import "~@/assets/styles/variables.less";`
                }
            }
        }
    },
}
