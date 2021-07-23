'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  
})
// //增加的内容
// const TARGET = process.env.npm_lifecycle_event;

// //开发环境
// if (TARGET === 'dev') {
//     var data = {
//         NODE_ENV: '"dev"',
//         API: '"http://www.dev.com"'
//     }
// }

// //测试环境
// if (TARGET === 'test') {
//     var data = {
//         NODE_ENV: '"test"',
//         API: '"http://www.test.com"'
//     }
// }

// //生产环境
// if (TARGET === 'prod') {
//     var data = {
//         NODE_ENV: '"prod"',
//         API: '"http://www.prod.com"'
//     }
// }

// //增加的内容