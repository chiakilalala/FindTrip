import $ from 'jquery';

$(document).ready(function() {
    // 導覽列按鈕


    // 固定導覽列
    const setFixed = $('#header');
    const setbutton = $('#navAction');

    const changeLogo = $('#changeLogo');
    let menuTop = setFixed.height();
    // setFixed.offset().top

    let navScroll = {

        init: function() {
            $(window).on('scroll', function() {
                navScroll.navDrop();
            })
        },

        navDrop: function() {
            let $scrollTop = $(window).scrollTop();

            if ($scrollTop > menuTop) {
                setFixed.addClass('is-fixtop');
                setbutton.addClass('bg-blue-500 text-white');
                // setbutton.removeClass('text-gray-800');

                changeLogo.addClass('changeLogo');
            } else if ($scrollTop == 0) {
                setFixed.removeClass('is-fixtop');
                setbutton.removeClass('bg-blue-500 text-white');
                // setbutton.addClass('text-gray-800');

                changeLogo.removeClass('changeLogo');
            }

        }
    };
    $(document).ready(function() {
        navScroll.init();
    });

    // $(window).on('load scroll resize', function () {
    //     if ($(window).scrollTop() > menuTop) {
    //         setFixed.addClass('is-fixtop');
    //         setbutton.addClass('bg-blue-500 text-white');
    //         // setbutton.removeClass('text-gray-800');
    //         setlogo.addClass('text-blue-500');
    //         changeLogo.addClass('changeLogo');

    //     } else {
    //         setFixed.removeClass('is-fixtop');
    //         setbutton.removeClass('bg-blue-500 text-white');
    //         // setbutton.addClass('text-gray-800');
    //         setlogo.removeClass('text-blue-500');
    //         changeLogo.removeClass('changeLogo');
    //     }
    // });
    // 固定導覽列 end

    // 至頂按鈕
    const backtopBtn = $('.js-e-backtop-btn')

    backtopBtn.hide();

    backtopBtn.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow')
        return false;
    });
    $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                backtopBtn.fadeIn();
            } else {
                backtopBtn.fadeOut();
            }
        })
        // 至頂按鈕 end
});