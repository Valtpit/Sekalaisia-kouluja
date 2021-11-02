/// <reference path="jquery-3.6.0.min.js" />
//Anun koodi, ELÄ RÄPI
$(function(){
    //Kysymykset näkyviin
    $(".kysymys").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //näytä 5
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }else if(vastaus === 2) {
                //näytä 10
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 3) {
                //näytä 15
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 4) {
                //näytä 20
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 5) {
                //näytä 25
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 6) {
                //näytä 30
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().next().removeClass("näytä");
                $(this).parent().parent().next().next().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
    
            $("[name=määrä]").prop("disabled", true);
    });
    
    
    //Kysymys1
    $(".tintti").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=harakka]").prop("disabled", true);
    });
    
    //Kysymys2
    $(".käpy").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kuusi]").prop("disabled", true);
    });
    
    //Kysymys3
    $(".terho").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=tammi]").prop("disabled", true);
    });
    
    //Kysymys4
    $(".tit").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
    
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=tit]").prop("disabled", true);
    });
    
    //Kysymys5
    $(".marja").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
    
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kataja]").prop("disabled", true);
    });
    
    //Kysymys6
    $(".nalle").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=karhu]").prop("disabled", true);
    });
    
    //Kysymys7
    $(".laulu").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=joutsen]").prop("disabled", true);
    });
    
    //Kysymys8
    $(".marjat").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=pihlaja]").prop("disabled", true);
    });
    
    //Kysymys9
    $(".koira").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=susi]").prop("disabled", true);
    });
    
    //Kysymys10
    $(".sihi").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=siili]").prop("disabled", true);
    });
    
    //Kysymys11
    $(".kärsämö").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=sian]").prop("disabled", true);
    });
    
    //Kysymys12
    $(".olo").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=vesi]").prop("disabled", true);
    });
    
    //Kysymys13
    $(".kierto").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=veden]").prop("disabled", true);
    });
    
    //Kysymys14
    $(".järvi").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=meri]").prop("disabled", true);
    });
    
    //Kysymys15
    $(".lehti").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kasvi]").prop("disabled", true);
    });
    
    //Kysymys16
    $(".ttää").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=yhtey]").prop("disabled", true);
    });
    
    
    });