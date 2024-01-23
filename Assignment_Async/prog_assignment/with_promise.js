function downloader(url,cb)
{
    // write a dummy impl using setTimeout to show a delay 
    console.log("Start Downloading from",url)
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Download completed")
             let downloaddata="Dummy Content"
             res(downloaddata)
             cb(downloaddata)
        },4000)
    })  
}

function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
   console.log("starting writing",data)
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("writing completed")
            let filename="Dummy.txt"
            res(filename)
            cb(filename)
        },2000)
   })
   
}
function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
     console.log("Start uploading",fileName)
     return new uploadFile((res,rej)=>{
        setTimeout(()=>{
            console.log("File uploading completed")
            let uploadresponse="successfully uploaded"
            res(uploadresponse)
            cb(uploadresponse)
      },3000)
     })
     
}

downloader("www.google.com",(downloaddata)=>{
    writeFile(downloaddata,(filename)=>{
        uploadFile(filename,"www.gmail.com",(uploadresponse)=>{
            console.log("status of task",uploadresponse)
        })
    })
}) //call back chain or call back hell