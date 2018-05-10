"use strict";
let slider = $(".slide");
let left = $("#leftBtn");
let right = $("#rightBtn");
let showInd=0;
let slideRight = ()=>{
    hideImg();
    ++showInd;
    if(showInd<0) {
        showInd = slider.length-1;
    }
    if(showInd>slider.length-1) {
        showInd = 0;
    }
    $(slider[showInd]).removeClass("hidden");
};
let slideLeft = ()=>{
    hideImg();
    --showInd;
    if(showInd<0) {
        showInd = slider.length-1;
    }
    if(showInd>slider.length-1) {
        showInd = 0;
    }
    $(slider[showInd]).removeClass("hidden");
};
let hideImg = () => {
    for(let i=0; i<slider.length; i++) {
        $(slider[i]).addClass("hidden");
    }
};
$(left).on("click", slideLeft);
$(right).on("click", slideRight);

