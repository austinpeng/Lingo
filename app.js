var request = require('request')
var fs = require('fs')
var url = 'http://tesseract.projectnaptha.com/img/eng_bw.png'
var filename = 'pic.png'
 
var writeFileStream = fs.createWriteStream(filename)
 
request(url).pipe(writeFileStream).on('close', function() {
  console.log(url, 'saved to', filename)
})

 Tesseract.recognize(myImage)
         .progress(function  (p) { alert('progress', p)    })
         .then(function (result) { alert('result', result) })
        