const {Writable} = require('stream')

const outStream = new Writable({
  // 如果别人调用，我们做什么
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    // 进入下一个流程
    callback()
  }
})

process.stdin.pipe(outStream);
// 保存文件为 writable.js 然后用 node 运行
// 不管你输入什么，都会得到相同的结果
