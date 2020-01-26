$(document).ready(function() {
    var nam = +$(".like-button__label").html()
    var sum = nam
    
    $( ".like-button__label" ).click(function(){
        if (nam == sum){
            sum += 1
            $(".like-button__label").html(sum)
        }
        else{
            sum -= 1
            $(".like-button__label").html(sum)
        }
    });
});