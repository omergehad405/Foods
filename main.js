let btn = document.querySelector(".go-up");

window.onscroll = () => {
    if(window.scrollY >= 500) {
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}