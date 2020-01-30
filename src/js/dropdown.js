$(document).ready(function() {
    $( ".dropdown__value" ).click(function(){
        $( ".dropdown__list" ).slideToggle(400);
        if ($('.dropdown').hasClass('dropdown__border')){
            $('.dropdown').removeClass('dropdown__border');
        }
        else{
            $('.dropdown').addClass('dropdown__border');
        }
    });
});
