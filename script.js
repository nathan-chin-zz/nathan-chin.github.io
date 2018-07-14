/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $('.message').toggleClass('hidden');
    $('.hover').hover(function () {
        $('.message').toggleClass('hidden');
    });
});