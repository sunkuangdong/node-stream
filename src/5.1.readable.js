const {Readable} = require('stream')

const inStream = new Readable()

inStream.push('hello world')
inStream.push('hello node')

inStream.push(null) // No more data

inStream.pipe(process.stdout)
// 用 node 运行文件
// 写入两次数据
// 先把所有数据都 push 进去，再 pipe
