$(function() {
    $('ul.navbar-nav li.dropdown>a').click(function() {
        location.href = $(this).attr('href');
    });

});