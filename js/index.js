console.log("your file is loaded correctly");

$(document).ready(function(){
 $(window).one("scroll",function(){
     $( ".modal" ).css( "display", "block" ).addClass( ".active" );
    });



$(".close").on("click",function(){
        $( ".modal" ).css("display", "none" ).removeClass( ".active" );
    });

$(window).on("click",function(){
        $( ".modal" ).css("display", "none" ).removeClass( ".active" );
    });

});