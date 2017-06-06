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
    var counterCeleb = 0;
    $("input:checkbox[name=celeb]:checked").each(function(){
      var selection = parseInt($(this).val());
      counterCeleb += selection;
    });
    var counterBio = 0;
    $("input:checkbox[name=bio]:checked").each(function(){
      var selection = parseInt($(this).val());
      counterBio += selection;
    });

    $(".future").hide();
    if (parseInt($("input:checkbox[id=cher]:checked").val()) === 1) {
      $("#immortal").show();
    } else if (counterFood > 3 && counterAct > 3) {
      $("#monster").show();
    } else if (counterCeleb > 3 && counterBio > 3) {
      $("#wealth").show();
    } else {
      alert("You cannot have a fortune, try again.")
    }
  });
});
