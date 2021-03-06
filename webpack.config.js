const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//import
require('path') //노드에서 언제든지 사용할 수 있는 전역 모듈


//export

//노드환경
module.exports = {
    // parcel index.html

    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',


    // 결과물 (번들)을 반환하는 설정
    output: {
       // path: path.resolve(__dirname,'dist'),
       // filename : 'main.js',
        clean: true
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}