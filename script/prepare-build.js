// prepare-build.js
import * as rimraf from 'rimraf'
import * as mkdirp from 'mkdirp'

// 删除 doc 文件夹
rimraf.sync('docs');

// 创建一个新的空的 doc 文件夹
mkdirp.sync('docs');

console.log('doc 文件夹已准备好');