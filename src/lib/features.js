
const fileFormat = (url="")=>{

    const fileExt = url.split('.').pop();

    if(fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif")
        return "image";

    if(fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
        return "video";

    if(fileExt === "mp3" || fileExt === "wav" )
        return "audio";

    return "file"
}

const transformImage = (url="",width="100")=>url

export {fileFormat,transformImage}