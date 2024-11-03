let start = document.getElementById("next")
start.addEventListener("click", loading)
function loading(){ setTimeout(()=>{
    window.location.href = "gaan.html"
    },1000)
}