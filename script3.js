let count = 1;
document.getElementById("radio5").checked = true;

setInterval( function(){
    nextImage();
}, 2000) //ou 2000

function nextImage(){
    count++;
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}
