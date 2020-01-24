$(document).ready(function () {
    $('.matchHeight').matchHeight();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.scrollspy').scrollSpy({
        scrollOffset: 25
    });
});

var header = $('header');
var fjMenu = $('.fj-menu');
var range = 200;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 1.1,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({
        'opacity': calc
    });

    if (calc > '1') {
        header.css({
            'opacity': 1
        });
        fjMenu.css({
            'color': "white"
        });
    } else if (calc < '0') {
        header.css({
            'opacity': 0
        });
        fjMenu.css({
            'color': "#212121"
        });
    }

});
