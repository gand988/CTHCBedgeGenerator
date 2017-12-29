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
    canvas.setAttribute('crossOrigin','anonymous');

    for (var i = 0; i < selected.length; i++) {
      var image = new Image(148,125);
      image.src = imagesCharacter[selected[i]];
      image.setAttribute('crossOrigin', 'anonymous'); // works for me
      image.onload = function() {
          context.drawImage(this, 0, 0);
          context.translate(148, 0);
      }
    }
  }

  var link = document.createElement('a');
      link.innerHTML = 'download image';
      link.addEventListener('click', function(ev) {
        // link.setAttribute('crossOrigin', 'anonymous'); // works for me
      link.href = canvas.toDataURL();
      link.download = "mypainting.png";
  }, false);
  document.body.appendChild(link);
