"use strict";
let tab = $(".tab");
let img = $(".tabImg");
$(tab).on("click", function(e) {
    e.preventDefault();
});
let showBrand = () =>{
    for(let i=0; i<img.length; i++) {
        $(img[i]).removeClass("hidden");
    }
    $(img[1]).addClass("hidden");
    $(img[4]).addClass("hidden");
    $(img[5]).addClass("hidden");
    $(img[3]).addClass("hidden");
};
let showAll = ()=> {
    for(let i=0; i<img.length; i++) {
        $(img[i]).removeClass("hidden");
    }
};
let showDesign = ()=> {
    for(let i=0; i<img.length; i++) {
        $(img[i]).removeClass("hidden");
    }
    $(img[0]).addClass("hidden");
    $(img[2]).addClass("hidden");
};
$(tab[1]).on("click", showBrand);
$(tab[0]).on("click", showAll);
$(tab[2]).on("click", showDesign);