let start = document.getElementById("start")
start.addEventListener("click", loading)
function loading(){ setTimeout(()=>{
    window.location.href = "video.html"
    },1000)
}