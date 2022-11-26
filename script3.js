let passe = 5;
document.getElementById("radio5").checked = true;

setInterval( function(){
    nextImage();
}, 5000) //ou 2000

function nextImage(){
    passe++;
    if(passe>8){
        passe = 1
    }

    document.getElementById("radio"+passe).checked = true;
}