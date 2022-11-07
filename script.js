$(function(){
    var menu = $('#menu-logo');
    var popup = $('#popup-container')

    function disableScroll () {
        $('body').addClass('non-scroll')
    };

    function enableScroll () {
        $('body').removeClass('non-scroll')
    };

    $('#menu-logo').click(function(){
        if (menu.is(':visible')){
            popup.show(disableScroll);
        }
    });

    $('#pop-cross').click(function(){
        if (popup.is(':visible')){
            popup.hide(enableScroll);
        }
    });

});