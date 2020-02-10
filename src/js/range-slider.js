$(document).ready(function() {
    $( ".range-slider__slider" ).slider({
        animate: "fast",
        range: true, 
        min: 0,
        max: 15000, 
        step: 100,
        values: [5000, 10000],
        change: function(){
            left = space($(".range-slider__slider").slider("values", 0))
            right = space($(".range-slider__slider").slider("values", 1))
            $(".range-slider__val").html(left+"₽ - "+right+"₽")
        }
    });
    left = space($(".range-slider__slider").slider("values", 0))
    right = space($(".range-slider__slider").slider("values", 1))
    $(".range-slider__val").html(left+"₽ - "+right+"₽")

    function space(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
})