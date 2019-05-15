$(document).ready(function() {
    "use strict";
    $(".topnav").click(function(e) {
        $(this).toggleClass("responsive");
        $("topnav").toggleClass("responsive");
        e.preventDefault();
    });
});