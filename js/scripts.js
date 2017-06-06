$(document).ready(function() {
  $(".zolfar-Qs").submit(function(event) {
    event.preventDefault();

    var counterFood = 0;
    $("input:checkbox[name=food]:checked").each(function() {
      var selection = parseInt($(this).val());
      counterFood += selection;
    });
    var counterAct = 0;
    $("input:checkbox[name=act]:checked").each(function(){
      var selection = parseInt($(this).val());
      counterAct += selection;
    });
    var counterBio = 0;
    $("input:checkbox[name=bio]:checked").each(function(){
      var selection = parseInt($(this).val());
      counterBio += selection;
    });

    $(".future").hide();
    if ($("input:checkbox[id=cher]:checked")) {
      $("#immortal").show();
    }
  });
});
