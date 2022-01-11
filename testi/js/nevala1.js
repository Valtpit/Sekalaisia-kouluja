
$("#fakta_esille").on("click", function(){




});
$("#visa_esille1").on("click", function(){
    $("#piilossa").show(0)
    $("#piilossa1").show(0)
    $("#visa_esille1").prop("disabled", true)
    $("#tulos").html("")
    oikein = 0
    for (let valinta = 1; valinta < 11; valinta++) {
        $("[name=visa" + valinta + "]").prop("checked", false)
        $("#visa" + valinta + "a").prop("disabled", false)
        $("#visa" + valinta + "a").removeAttr("style")
        $("#visa" + valinta + "b").prop("disabled", false)
        $("#visa" + valinta + "b").removeAttr("style")
        $("#visa" + valinta + "c").prop("disabled", false)
        $("#visa" + valinta + "c").removeAttr("style")
    }
})

let oikein = 0

$("[name=visa1]").on("click", function(){

    let type = Number($("[name=visa1]:checked").val())
    if (type === 1) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa1a").prop("disabled", true)
    $("#visa1b").prop("disabled", true)
    $("#visa1c").prop("disabled", true)
})

$("[name=visa2]").on("click", function(){
    let type = Number($("[name=visa2]:checked").val())
    if (type === 2) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa2a").prop("disabled", true)
    $("#visa2b").prop("disabled", true)
    $("#visa2c").prop("disabled", true)
})

$("[name=visa3]").on("click", function(){
    let type = Number($("[name=visa3]:checked").val())
    if (type === 2) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa3a").prop("disabled", true)
    $("#visa3b").prop("disabled", true)
    $("#visa3c").prop("disabled", true)
})

$("[name=visa4]").on("click", function(){
    let type = Number($("[name=visa4]:checked").val())
    if (type === 1) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa4a").prop("disabled", true)
    $("#visa4b").prop("disabled", true)
    $("#visa4c").prop("disabled", true)
})

$("[name=visa5]").on("click", function(){
    let type = Number($("[name=visa5]:checked").val())
    if (type === 3) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa5a").prop("disabled", true)
    $("#visa5b").prop("disabled", true)
    $("#visa5c").prop("disabled", true)
})

$("[name=visa6]").on("click", function(){
    let type = Number($("[name=visa6]:checked").val())
    if (type === 1) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa6a").prop("disabled", true)
    $("#visa6b").prop("disabled", true)
    $("#visa6c").prop("disabled", true)
})

$("[name=visa7]").on("click", function(){
    let type = Number($("[name=visa7]:checked").val())
    if (type === 2) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1

    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa7a").prop("disabled", true)
    $("#visa7b").prop("disabled", true)
    $("#visa7c").prop("disabled", true)
})

$("[name=visa8]").on("click", function(){
    let type = Number($("[name=visa8]:checked").val())
    if (type === 3) {
        $().prop(this.style.backgroundColor = "green")
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa8a").prop("disabled", true)
    $("#visa8b").prop("disabled", true)
    $("#visa8c").prop("disabled", true)
})

$("[name=visa9]").on("click", function(){
    let type = Number($("[name=visa9]:checked").val())
    if (type === 2) {
        $().prop(this.style.backgroundColor = "green")
       oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = "red")
    }
    $("#visa9a").prop("disabled", true)
    $("#visa9b").prop("disabled", true)
    $("#visa9c").prop("disabled", true)
})

$("[name=visa10]").on("click", function(){
    let type = Number($("[name=visa10]:checked").val())
    if (type === 3) {
        $().prop(this.style.backgroundColor = 'green')
        oikein = oikein + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
    }
    $("#visa10a").prop("disabled", true)
    $("#visa10b").prop("disabled", true)
    $("#visa10c").prop("disabled", true)
})

$("#näytä_tulos").on("click", function(){
    $("#piilossa").hide(0)
    $("#piilossa1").hide(0)
    $("#visa_esille1").prop("disabled", false)
    $("#visa_esille1").html("Kokeile uudestaan!")
    $("#tulos").html("Tuloksesi oli: " + oikein + "/10 oikein!")
    if (oikein <= 4) {
        $("#tulos").append("<br>" + "Aijai.. Nyt meni eläimet sekaisin. Yritä uudestaan!")
        
    } else if (oikein <= 6) {
        $("#tulos").append("<br>" + "Tiedät jotain eläimistä, mutta vielä on parantamisen varaa.")
    } else if (oikein <= 9) {
        $("#tulos").append("<br>" + "Hyvä tulos! Yritä päästä täysiin pisteisiin.")
    } else {
        $("#tulos").append("<br>" + "Loistavaa! Olet todellinen eläintietäjä!")
    }
})


