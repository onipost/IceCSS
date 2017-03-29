$(document).ready(function() {
    var object = $(".slider_item");
    var amount = $(".slider_container"+" .slider_item").length * 100;
    var amountPosition = $(".position_point").length * 100;
    var button_next = '#button-next';
    var button_previous ='#button-back';
    var i=0;
    var j=0;
    object.css('left', '0');
    var point = $("img.slider_item").attr("data-number");
    $("#1").css("border-color", "#00FF00");
    $(button_next).click(function(){
        if(j==0){
            j=1;
            point = parseInt(point,10);
            point = point+1;
            $("#"+point).css("border-color", "#00FF00");
            $("#"+(point-1)).css("border-color", "#000000");
            i=i-100;
            if(i == -1 * amount + 100){
                $(button_next).css("visibility","hidden");
                $(button_previous).click(function(){
                    $(button_next).css("visibility","visible");
                });}
            object.animate({
                left: i+"%"
            }, 800 );
            setTimeout(function(){j=0;},800);
        }
    });
    $(button_previous).css("visibility","hidden");
    $(button_next).click(function(){
        $(button_previous).css("visibility","visible");
    });
    $(button_previous).click(function(){
        if(j==0){
            j=1;
            point = parseInt(point,10);
            point = point-1;
            $("#"+(point+1)).css("border-color", "#000000");
            $("#"+point).css("border-color", "#00FF00");
            i=i+100;
            if(i == 0){
                $(button_previous).css("visibility","hidden");
                $(button_next).click(function(){
                    $(button_previous).css("visibility","visible");
                });}
            object.animate({
                left: i+"%"
            }, 800 );
            setTimeout(function(){j=0;},800);
        }
    });
});