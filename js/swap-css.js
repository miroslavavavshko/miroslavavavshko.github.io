$(document).ready(function() {

    $("img#1").click(function() {
    $("link[media=print]").attr({href : "css/print-color.css"});
    });
     
    $("img#2").click(function() {
    $("link[media=print]").attr({href : "css/print-color-pdf.css"});
    });
     
    $("img#3").click(function() {
    $("link[media=print]").attr({href : "css/print-no-color.css"});
    });

    // $('img#1.print-color').on('click', function(){
    
    //     $(this).addClass('active');
    // });

    // $('img#2.print-color-pdf').on('click', function(){
    
    //     $(this).addClass('active');
    // });

    // $('img#3.print-color-no').on('click', function(){
    
    //     $(this).addClass('active');
    // });

    $("img[id]").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active")
   
    });

    });

   