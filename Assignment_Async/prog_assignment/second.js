let ur="This is url"
let data="this is data"
let new_url="this is new url"
let file="this is file name"

let cb1=()=>{
    console.log("from downloader callback function")
     }
let cb2=()=>{
        console.log("from filewriting callback function")
         }
 let cb3=()=>{
            console.log("from uploading callback function")
             }
     
function downloader(ur,cb1)
{
    // write a dummy impl using setTimeout to show a delay 
    setTimeout(function(){cb1();
                    writeFile(data,cb2)},4000);
    console.log(ur);
}

function writeFile(data, cb2) {
    // write a dummy impl using setTimeout to show a delay 
    setTimeout(function(){cb2();
        uploadFile(file,new_url,cb3)},2000);
    console.log(data);
}
function uploadFile(fileName, newUrl, cb3) {
     // write a dummy impl using setTimeout to show a delay 
     setTimeout(cb3,3000);
     console.log(fileName);
     console.log(newUrl);
}

downloader(ur,cb1)
