$(document).ready(function() {
  $("form#celebrity").submit(function(event) {

    var nameInput = $("input#name").val();
    var age = $("input#age").val();
    var personality = parseInt($("select#personality").val());

    if (personality === 1) {
      $('#kristen').show();
        $('#simon').hide();
        $('#bob').hide();
    } else if (personality === 2) {
        $('#simon').show();
        $('#kristen').hide();
        $('#bob').hide();
      } else {
        $('#bob').show();
        $('#simon').hide();
        $('#kristen').hide();

      }

      $(".name").text(nameInput);

      $("#date").show();


      event.preventDefault();

  });
});
