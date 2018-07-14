/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $('.hover').hover(function () {
        $('.message').toggleClass('hidden');
    });
});