$(document).ready(function() {
    var text = $( ".dropdown__value" ).html()
    var val = 0
    var one = 0
    var two = 0
    var tree = 0
    $( ".dropdown__value" ).click(function(){
        $( ".dropdown__list" ).slideToggle(400);
        if ($('.dropdown').hasClass('dropdown__border')){
            $('.dropdown').removeClass('dropdown__border');
        }
        else{
            $('.dropdown').addClass('dropdown__border');
        }
    });
    $(".dropdown__plus").click(function(){
        val = +$(this).siblings(".dropdown__item-val").html()
        val += 1
        $(this).siblings(".dropdown__item-val").html(val)
    });
    $(".dropdown__minus").click(function(){
        val = +$(this).siblings(".dropdown__item-val").html()
        if (val == 0){
            $(this).siblings(".dropdown__item-val").html(val)
        }
        else{
        val -= 1
        $(this).siblings(".dropdown__item-val").html(val)
        }
    });
    $(".dropdown__list .button__text:eq(1)").click(function(){
        one = +$( ".dropdown__list .dropdown__item-val:eq(0)" ).html()
        two = +$( ".dropdown__list .dropdown__item-val:eq(1)" ).html()
        tree = +$( ".dropdown__list .dropdown__item-val:eq(2)" ).html()
        if (one == 0 && two== 0 && tree == 0){
            $( ".dropdown__value" ).html(text)
        }
        else if(one+two >= 2 && one+two <=4){
            $( ".dropdown__value" ).html(one+two+" гостя")
        }
        else if(one+two >= 5){
            $( ".dropdown__value" ).html(one+two+" гостей")
        }
        else if(one+two == 1){
            $( ".dropdown__value" ).html(one+two+" гость")
        }
            
    });
    $(".dropdown__list .button__text:eq(0)").click(function(){
        $( ".dropdown__value" ).html(text)
        $( ".dropdown__list .dropdown__item-val:eq(0)" ).html(0)
        $( ".dropdown__list .dropdown__item-val:eq(1)" ).html(0)
        $( ".dropdown__list .dropdown__item-val:eq(2)" ).html(0)
    });
});


