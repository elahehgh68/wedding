const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const cover = document.getElementById("coverImage");
const info = document.getElementById("info");

let opened = false;

// کلیک روی پاکت
envelope.onclick = function () {

    if(opened) return;

    opened = true;

    document.getElementById("scene").classList.add("open");

};


// کلیک روی خود کارت
card.onclick = function(){

    if(!opened) return;

    cover.style.display="none";

    info.style.display="block";

};
