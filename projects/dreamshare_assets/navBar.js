navDrop();
window.onresize = function() {
    navDrop();
}

function navDrop() {
    let A = document.querySelector("#nav-links");
    if (A.style.visibility === "hidden") {
        A.style.visibility = "visible"; 
    } else {
        A.style.visibility = "hidden"; 
    }      
}