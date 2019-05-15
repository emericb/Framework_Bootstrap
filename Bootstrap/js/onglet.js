$(document).ready(function() {
    "use strict";
    $(".tab-content").tabs();
    $(".tab-list").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
});