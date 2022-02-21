const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/app/components'),
            '@hooks': resolvePath('./src/hooks'),
            '@reducers': resolvePath('./src/reducers'),
            '@api': resolvePath('./src/api')
        }
    },
}