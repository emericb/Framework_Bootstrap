$(document).ready(function() {

  $(".data-target-modal").on("click", function() {

    $("#Modal").show();
  });

  $(".close").on("click", function() {
    $("#Modal").hide();
  });

});

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('#Modal').hide();
  }
});