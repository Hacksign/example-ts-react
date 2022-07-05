import express from 'express';
import webpackDevMiddle from 'webpack-dev-middleware';
import { webpack } from 'webpack';

let listening = false;
const app = express();
const clientWebpackConfig = require('../webpack.client');
const compiler = webpack([clientWebpackConfig]);

app.use(
    webpackDevMiddle(compiler, { publicPath: clientWebpackConfig.output.publicPath })
);
compiler.hooks.done.tap(
    'ExampleProject',
    () => {
        app.get(
            '*',
            (request, response) => {
                response.end(`
                    <!DOCTYPE html>
                    <html>
                        <body>
                            <div id="app">1111</div>
                        </body>
                        <script type="text/javascript" src="/dist/default.bundle.js"></script>
                    </html>
                `);
            }
        );

        if (!listening)
        {
            app.listen(
                2000,
                '0.0.0.0',
                () => console.log('listening on 2000')
            );
            listening = true;
        }
    } 
);


