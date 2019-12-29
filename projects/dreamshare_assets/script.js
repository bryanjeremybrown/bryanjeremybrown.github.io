window.onload = function() {
    document.querySelector("#dropdown-contentA").style.visibility = "hidden";
    document.querySelector("#dropdown-contentB").style.visibility = "hidden";
    document.querySelector("#dropdown-contentC").style.visibility = "hidden";
}

function revealDrop() {
    let A = document.querySelector("#dropdown-contentA");
    if (A.style.visibility === "hidden") {
        A.style.visibility = "visible"; 
    } else {
        A.style.visibility = "hidden"; 
    }      
}

function revealDropB() {
    let B = document.querySelector("#dropdown-contentB");
    if (B.style.visibility === "hidden") {
        B.style.visibility = "visible"; 
    } else {
        B.style.visibility = "hidden"; 
    }      
}

function revealDropC() {
    let C = document.querySelector("#dropdown-contentC");
    if (C.style.visibility === "hidden") {
        C.style.visibility = "visible"; 
    } else {
        C.style.visibility = "hidden"; 
    }      
}