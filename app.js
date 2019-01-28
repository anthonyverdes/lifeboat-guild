$(document).ready(function(){
    $(".guild-name").fadeIn(5000);
    
    $(".nav__guild-info").click(function(){
        $(".guild-info").hide();
        $(".raid-times").hide();
        $(".rbg-times").hide();
        $(".discord").hide();
        $(".guild-info").fadeIn();
    });

    $(".nav__raid-times").click(function(){
        $(".guild-info").hide();
        $(".raid-times").hide();
        $(".rbg-times").hide();
        $(".discord").hide();
        $(".raid-times").fadeIn();
    });

    $(".nav__rbg-times").click(function(){
        $(".guild-info").hide();
        $(".raid-times").hide();
        $(".rbg-times").hide();
        $(".discord").hide();
        $(".rbg-times").fadeIn();
    });

    $(".nav__discord").click(function(){
        $(".guild-info").hide();
        $(".raid-times").hide();
        $(".rbg-times").hide();
        $(".discord").hide();
        $(".discord").fadeIn();
    });

});