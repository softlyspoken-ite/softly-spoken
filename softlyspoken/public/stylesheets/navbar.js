var but = document.getElementById("uploadButton");
var sec = document.getElementById("uploadSection");
var cl = document.getElementById("closeButton");

but.onclick = function () {
    sec.style.display = "block";
}

cl.onclick = function () {
    sec.style.display = "none";
}