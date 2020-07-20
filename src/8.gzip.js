// gzip 压缩
const fs = require('fs')
const zlib = require('zlib')
const file = process.argv[2]

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write(".")) // 打印进度条
  .pipe(fs.createWriteStream(file + ".gz"))
  .on('finish', () => console.log('done')) // 压缩完成
