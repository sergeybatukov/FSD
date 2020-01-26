$(document).ready(function() {
    $( ".checkbox-list__header" ).click(function(){
        if ($(this).hasClass('checkbox-list__header__rotate')){
            $(this).removeClass('checkbox-list__header__rotate');
            $( ".checkbox-list__container" ).toggle(400);
        }
        else{
            $(this).addClass('checkbox-list__header__rotate');
            $( ".checkbox-list__container" ).toggle(400);
        }
    });
});
