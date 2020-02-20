$(document).ready(function() {
    // переменные для хранения начальной и конечной даты
    var startDay
    var endDay

    // объект календаря
    $('.datepicker-here').datepicker({
        range: true,
        prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
        nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
        keyboardNav: true,
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        onSelect: function (fd, d, picker) { 
            startDay = fd.split(",")[0]
            endDay = fd.split(",")[1]
        }
    }) 

    // добовляем кнопку 'применить', и присваеваем классы для кнопки 'очистить'
    $('.datepicker--button').addClass('button__text button__text__inactive')
    $('.datepicker--content').append('<button class="button__text" type="button">применить</button>');
    
    // скрываем все календари
    $(".datepicker" ).slideToggle(0);

    // открытие по нажатию на поля ввода
    $(".end, .start").click(function(){
        $(this).parent().find('.datepicker').slideToggle(400)
    })

    // кнопка "применить", запись в инпуты
    $('.button__text').not('.button__text__inactive').click(function(){
        $(this).closest('.datepicker').slideToggle(400);
        if (startDay == 0){
            $(this).parents('.date-range').children('.start').children('.date-range__start').html('ДД.ММ.ГГГГ')
        }
        else {
            $(this).parents('.date-range').children('.start').children('.date-range__start').html(startDay)
        }
        $(this).parents('.date-range').children('.end').children('.date-range__end').html(endDay)
    })

    // кнопка "очистить"
    $('.button__text__inactive').click(function(){
        $(this).parents('.date-range').children('.start').children('.date-range__start').html('ДД.ММ.ГГГГ')
        $(this).parents('.date-range').children('.end').children('.date-range__end').html('ДД.ММ.ГГГГ')
    })

    $('.date-range__start').html('ДД.ММ.ГГГГ')
    $('.date-range__end').html('ДД.ММ.ГГГГ')
    
    // доделать ограничения: -для выбора периода(начальная дата не меньше сегодня); 
    //                       -для дня рождения(не больше сегодня, так как ограничения по возросту не известны) 
});