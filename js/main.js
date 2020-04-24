
function onbodyload(){
    setTimeout(afterloader, 300);

}

function afterloader(){
    document.getElementById("my-loader").style.display = "none";
    document.getElementById("full-body").style.display = "block";
}