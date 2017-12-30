  // array with the character images
  var imagesCharacter = ["img/crono.png","img/marle.png","img/lucca.png","img/frog.png","img/robo.png","img/ayla.png","img/magus.png"];

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  // drawing function
  function drawingSelected() {
    // clear the canvas if the user press 'Generate'
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 444, 125);
    var selected = [];
    // check for any input:checked checkbox and push the VALUE into the array
    $('.charSelect input:checked').each(function() {
      selected.push($(this).attr('value'));
    });

    // search image inside the imagesCharacter[] and draw the image
    for (var i = 0; i < selected.length; i++) {
      var image = new Image(148,125);
      image.src = imagesCharacter[selected[i]];
      // image.setAttribute('crossOrigin', 'anonymous'); // maybe for
      image.onload = function() {
        context.drawImage(this, 0, 0);
        context.translate(148, 0);
      }
    }
    $('.CTchara').prop("checked", false);   // set checkbox :uncheck
  }

  function uncheckBox(){
    $('.CTchara').prop("checked", false);
    context.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context.clearRect(0, 0, 444, 125);      // clear the canvas
  }

  // SAVE CODE
  // var link = document.createElement('a');
  const link = document.querySelector('#saveImage');
      // link.innerHTML = 'download image';
      link.addEventListener('click', function(ev) {
      link.href = canvas.toDataURL();
      link.download = "myCharacters.png";
  }, false);
  // document.body.appendChild(link);
