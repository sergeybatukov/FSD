$(document).ready(function() {

    //массив с путями к изображениям 
    var imgs = ['/assets/img/1.png', '/assets/img/2.png', '/assets/img/3.png', '/assets/img/4.png']

    //текущий индекс 
    var i = 0

    //составляем значение свойства background-image
    var background = 'url("'+imgs[i]+'")'

    $('.galery__img').css('background-image', background)
    
    //создаем круглые кнопки изходя из количества элементов в массиве 
    $.each(imgs, function(index){
        $('.galery__button-dots').append('<div id="'+index+'" class="galery__button-dot"></div>')
    })

    $('#'+i).addClass('galery__button-dot_fill')

    // левая кнопка
    $('.galery__button-left').click(function(){
        $('#'+i).removeClass('galery__button-dot_fill')
        if (i > 0){
            i = i - 1
            background = 'url("'+imgs[i]+'")'
            $(this).parents('.galery').children('.galery__img').css('background-image', background)
        }
        $('#'+i).addClass('galery__button-dot_fill')
    })

    // правая кнопка
    $('.galery__button-right').click(function(){
        $('#'+i).removeClass('galery__button-dot_fill')
        if (i < imgs.length-1){
            i = i + 1
        } 
        else {
            i = i
        }
        background = 'url("'+imgs[i]+'")'
        $(this).parents('.galery').children('.galery__img').css('background-image', background)
        $('#'+i).addClass('galery__button-dot_fill')
    })

    // круглые кнопки
    $('.galery__button-dot').click(function(){
        var id = $(this).attr("id")
        background = 'url("'+imgs[id]+'")'
        $(this).parents('.galery').children('.galery__img').css('background-image', background)
        $('.galery__button-dot').removeClass('galery__button-dot_fill')
        $(this).addClass('galery__button-dot_fill')
        i = +id
    })
})