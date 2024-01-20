function downloader(url,cb)
{
    // write a dummy impl using setTimeout to show a delay 
    console.log("Start Downloading from",url)
    setTimeout(()=>{
        console.log("Download completed")
         let downloaddata="Dummy Content"
         cb(downloaddata)
    },4000)
}
function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
   console.log("starting writing",data)
   setTimeout(()=>{
            console.log("writing completed")
            let filename="Dummy.txt"
            cb(filename)
   },2000)
}
function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
     console.log("Start uploading",fileName)
     setTimeout(()=>{
           console.log("File uploading completed")
           let uploadresponse="successfully uploaded"
           cb(uploadresponse)
     },3000)
}

downloader("www.google.com",(downloaddata)=>{
    writeFile(downloaddata,(filename)=>{
        uploadFile(filename,"www.gmail.com",(uploadresponse)=>{
            console.log("status of task",uploadresponse)
        })
    })
}) //call back chain or call back hell