$(document).ready(function () {
    //Кнопка открыть мобильное меню
    $('.sandwich').click(function () {
        if ($('#menu').is(":visible")) {
            $(this).addClass('collapsed');
            $('#menu').slideUp(300);
        }
        else {
            $(this).removeClass('collapsed');
            $('#menu').slideDown(300);
        }
    })
    //элемент формы селект
    $('.select').click(function () {
        if ($(this).hasClass('open')) {
            $(this).find('.option').slideUp(300);
            $(this).removeClass('open')
        }
        else {
            $(this).find('.option').slideDown(300);
            $(this).addClass('open')
        }
    })
    //Элемент формы чекбокс
    $('.check_block').click(function () {
        if ($(this).hasClass('check')) {
            $(this).removeClass('check');
            $(this).find('input').prop('checked', false);
        }
        else {
            $(this).addClass('check');
            $(this).find('input').prop('checked', true);
        }
    })
    //Элемеент  формы радио
    $('.radio_block').click(function () {
        if ($(this).hasClass('radio')) {
            $(this).removeClass('radio');
            $(this).find('input').prop('checked', false);
        }
        else {
            $(this).parents('.radio_wrap').find('.radio').find('input').prop('checked', false)
            $(this).parents('.radio_wrap').find('.radio').removeClass('radio')
            $(this).addClass('radio');
            $(this).find('input').prop('checked', true);
        }
    })
    /*направление вращения колеса мыши, положительное в низ отрицательное в верх*/
    $(window).on('wheel', function (e) {
        console.log(e.originalEvent.deltaY);
    });
    $('.lk_block').click(function () {
        if ($(this).find('.lk_menu').is(":hidden")) {
            $(this).find('.lk_menu').fadeIn(200)
        }
        else {
            $(this).find('.lk_menu').fadeOut(200)
        }
    })
    $('.table').on('click','.option',function () {
        if ($(this).find('.option_menu').is(":hidden")) {
            $('.option_menu').fadeOut(200)
            $(this).find('.option_menu').fadeIn(200)
        }
        else {
            $(this).find('.option_menu').fadeOut(200)
        }
    })
    $(".table").find('.info_line').each(function (index, el) {
        var win_w = $(window).outerWidth();
        if (win_w <= 1133) {
            var name = $(this).find('.hide1').attr('data-name')
            var value = $(this).find('.hide1').html();
            var li = "<li class='vizible6'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
        if (win_w <= 1018) {
            var name = $(this).find('.hide2').attr('data-name')
            var value = $(this).find('.hide2').html();
            var li = "<li lass='vizible5'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
        if (win_w <= 895) {
            var name = $(this).find('.hide3').attr('data-name')
            var value = $(this).find('.hide3').html();
            var li = "<li lass='vizible4'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
        if (win_w <= 783) {
            var name = $(this).find('.hide4').attr('data-name')
            var value = $(this).find('.hide4').html();
            var li = "<li lass='vizible3'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
        if (win_w <= 678) {
            var name = $(this).find('.hide5').attr('data-name')
            var value = $(this).find('.hide5').html();
            var li = "<li lass='vizible2'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
        if (win_w <= 401) {
            var name = $(this).find('.hide6').attr('data-name')
            var value = $(this).find('.hide6').html();
            var li = "<li lass='vizible1'><span class='name'>" + name + "</span>" + "<p class='value'>" + value + "</p>"
            $(this).next('.children_wrap').find('.list_info').prepend(li);
        }
    });
    /*$(window).resize(function () {
     var win_w=$(window).outerWidth();
     if(win_w>401){
     $('.children_wrap').find('.vizible1').fadeOut(200)
     }
     if(win_w>678){
     $('.children_wrap').find('.vizible2').fadeOut(200)
     }
     if(win_w>783){
     $('.children_wrap').find('.vizible3').fadeOut(200)
     }
     console.log(win_w);
     return;
     })*/
    var win_w = $(window).outerWidth();
    if (win_w <= 1133) {
        $('.open_info').click(function () {
           if($(this).hasClass('close_info')){
               $(this).next('.children_wrap').slideUp(300);
               $(this).removeClass('close_info');
           }
           else{
               $(this).addClass('close_info');
               $(this).next('.children_wrap').slideDown(300);
           }
        })

    }

   /* document.onkeydown = function(e) {
        if(event.keyCode == 123) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
            return false;
        }
    }*/
})