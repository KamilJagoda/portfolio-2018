$(document).ready(function(){

    var menuShowButton = $('#show-menu'),
        menuHideButton = $('#hide-menu'),
        menuWrapper = $('.navbar__wrapper');

    menuShowButton.on('click', function(e) {
        e.preventDefault();
        menuWrapper.addClass('open');
    });
    menuHideButton.on('click', function(e) {
        e.preventDefault();
        menuWrapper.removeClass('open');
    });


});