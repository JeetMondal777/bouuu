let next = document.getElementById("next")
next.addEventListener("click", loading)

function loading(){ setTimeout(()=>{
    window.location.href = "kobita.html"
    },1000)
}