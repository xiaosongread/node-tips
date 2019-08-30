/** 
 * use: 批量修改本地文件的文件名
 * 
 * conditions: 本地一定要全局安装node环境
 * 
*/
let fs = require("fs");
// 操作的文件的文件名
let src = 'imgs';

// 读取指定目录下的文件
fs.readdir(src, function(err, files){
  console.log(files) // [ '2.png', '5.png', '7.png' ]
  files.forEach(function(fileName, index){
    let oldPath = src + '/' + fileName
    let newPath = src + '/' + (index + 1) + '.' + fileName.split('.')[1]
    // 重新命名文件名称
    fs.rename(oldPath, newPath, function(err){
      // throw new Error('asdasdad') 
      // 返回 error: asdasdad,error_code: 500,
      if (err) throw err
      console.log('重命名成功！')
    })
  })
})


