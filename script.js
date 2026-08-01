const cover = document.getElementById("cover");
const invite = document.getElementById("invite");

cover.addEventListener("click", function () {

    cover.style.display = "none";

    invite.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
