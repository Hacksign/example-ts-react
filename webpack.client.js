const path = require('path');

module.exports = {
    name: 'client webpack config',
    target: 'web',
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    entry: {
        default: [
            path.resolve(process.cwd(), './src/app.tsx')
	    ]
    },
    output: {
        path: path.resolve(process.cwd(), './dist/client'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.ts[x]$/,
                exclude: /node_modules/,
                use: ['babel-loader']
	        }   
	    ]
    }
}
