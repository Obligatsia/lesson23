"use strict";var tab=$(".tab"),img=$(".tabImg");$(tab).on("click",function(i){i.preventDefault()});var showBrand=function(){for(var i=0;i<img.length;i++)$(img[i]).removeClass("hidden");$(img[1]).addClass("hidden"),$(img[4]).addClass("hidden"),$(img[5]).addClass("hidden"),$(img[3]).addClass("hidden")},showAll=function(){for(var i=0;i<img.length;i++)$(img[i]).removeClass("hidden")},showDesign=function(){for(var i=0;i<img.length;i++)$(img[i]).removeClass("hidden");$(img[0]).addClass("hidden"),$(img[2]).addClass("hidden")};$(tab[1]).on("click",showBrand),$(tab[0]).on("click",showAll),$(tab[2]).on("click",showDesign);