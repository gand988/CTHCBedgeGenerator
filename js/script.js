  // function that search CHECKED checkbox
  // array with the character images
  var imagesCharacter = ["img/crono.png","img/marle.png","img/lucca.png","img/frog.png","img/robo.png","img/ayla.png","img/magus.png"];
  // script for myCanvas
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  function drawingSelected() {
    var selected = [];
    // check for any input:checked checkbox and push the VALUE into the array
    $('.charSelect input:checked').each(function() {
      selected.push($(this).attr('value'));
    });

    // search image and draw

    for (var i = 0; i < selected.length; i++) {
      var image = new Image(148,125);
      image.src = imagesCharacter[selected[i]];
      image.onload = function() {
          context.drawImage(this, 0, 0);
          context.translate(148, 0);
      }
    }
  }
