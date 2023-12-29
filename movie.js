window.onload=()=>{
    let parameters=getParams();
    let targetMovie=movies[parameters.index];
    video.src=targetMovie.url;
}