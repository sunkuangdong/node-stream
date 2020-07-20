const {Transform} = require('stream')

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    // 1. 读数据 chunk.toString()
    // 2. 写数据 this.push(xxx)
    this.push(chunk.toString().toUpperCase())
    callback();
  }
})

process.stdin.pipe(upperCaseTr).pipe(process.stdout)
