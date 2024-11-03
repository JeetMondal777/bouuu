let start = document.getElementById("next")
start.addEventListener("click", loading)
function loading(){ setTimeout(()=>{
    window.location.href = "video2.html"
    },1000)
}