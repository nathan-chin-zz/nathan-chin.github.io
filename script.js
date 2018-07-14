/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $('.previous').hover(function () {
        $('.message').toggleClass('hidden');
    });
});