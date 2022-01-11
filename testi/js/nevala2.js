<reference path="jquery-3.6.0.min.js" />




$(".answer1").on("click", function(){
let vastaus = Number($(this).val());

if (vastaus === 1) {
// oikein
$(this).parent().addClass("selected")

} else {
// väärin

$(this).parent().addClass("wrong");
// mikä on oiekin [name=xxxxx][value=1]
let name_attribuutti= $(this).attr("name");
let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
$(oikea_vastaus).parent().addClass("right");
}


});


