$(document).ready(function() {
    var dateRange =$('.datepicker-here').datepicker({
        range: true,
        prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
        keyboardNav: true,
        minDate: new Date(),
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function (fd, d, picker) { 
            $(".date-range__start").val(fd.split(",")[0]);
            $(".date-range__end").val(fd.split(",")[1]);
        }
    }) 
    $('.datepicker--button').addClass('button__text button__text__inactive')
    $('.datepicker--content').append('<button class="button__text" type="button">применить</button>');

    $(".datepicker" ).slideToggle(0);

    $(".date-range__start, .date-range__end, .start").click(function(){
        var position = $(".date-range__start").offset()
        $(".datepicker" ).slideDown(400);
    })
    // $(".date-range__end").click(function(){
    //     var position = $(".date-range__start").offset()
    //     $(".datepicker" ).slideDown(400);
    // })

    $('.button__text').not('.button__text__inactive').click(function(){
        $(this).closest('.datepicker').slideToggle(400);
    })
});