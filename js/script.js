  // array with the character images
  var imagesCharacter = ["img/crono.png","img/marle.png","img/lucca.png","img/frog.png","img/robo.png","img/ayla.png","img/magus.png"];
  var imagesThumbCharacter = ["img/thumb_crono.png","img/thumb_marle.png","img/thumb_lucca.png","img/thumb_frog.png","img/thumb_robo.png","img/thumb_ayla.png","img/thumb_magus.png"];
  var imagesSpriteCharacter = ["img/char_crono.png","img/char_marle.png","img/char_lucca.png","img/char_frog.png","img/char_robo.png","img/char_ayla.png","img/char_magus.png"];
  var canvas = document.getElementById('myCanvas');
  var canvas2 = document.getElementById('myCanvas2');
  var canvas3 = document.getElementById('myCanvas3');
  var context = canvas.getContext('2d');
  var context2 = canvas2.getContext('2d');
  var context3 = canvas3.getContext('2d');
  
  // drawing function
  function drawingSelected() {
    // console.log('test');
    
    // clear the canvas if the user press 'Generate'
    context.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context.clearRect(0, 0, 444, 125);      // clear the canvas
    context2.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context2.clearRect(0, 0, 330, 120);      // clear the canvas
    context3.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context3.clearRect(0, 0, 150, 58);      // clear the canvas
    var selected = [];
    // check for any input:checked checkbox and push the VALUE into the array
    $('.char__selection input:checked').each(function() {
      selected.push($(this).attr('value'));
      // console.log(selected);
    });

    // search image inside the imagesCharacter[] and draw the image
    for (var i = 0; i < selected.length; i++) {
      var image = new Image(148,125);
      var image2 = new Image(100,100);
      var image3 = new Image(50, 58);
      image.src = imagesCharacter[selected[i]];
      image2.src = imagesThumbCharacter[selected[i]];
      image3.src = imagesSpriteCharacter[selected[i]];

      //canvas 1 
      image.onload = function() {
        context.drawImage(this, 0, 0);
        context.translate(148, 0);
      }
      // canvas 2 
      image2.onload = function(){
        context2.drawImage(this, 10, 10);
        context2.translate(110, 0);
      }
      // canvas 3
      image3.onload = function(){
        context3.drawImage(this, 0, 0);
        context3.translate(50, 0);
      }
    }
    $('.CTchara').prop("checked", false);   // set checkbox :uncheck
  }

  // clear checkbox, canvas
  function uncheckBox(){
    $('.CTchara').prop("checked", false);
    context.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context.clearRect(0, 0, 444, 125);      // clear the canvas
    context2.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context2.clearRect(0, 0, 330, 120);      // clear the canvas
    context3.setTransform(1, 0, 0, 1, 0, 0); // canvas cursor position to origin
    context3.clearRect(0, 0, 150, 58);      // clear the canvas
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

  const link2 = document.querySelector('#saveImage2');
  // link.innerHTML = 'download image';
  link2.addEventListener('click', function(ev) {
  link2.href = canvas2.toDataURL();
  link2.download = "myCharacters.png";
}, false);

const link3 = document.querySelector('#saveImage3');
// link.innerHTML = 'download image';
link3.addEventListener('click', function(ev) {
link3.href = canvas3.toDataURL();
link3.download = "myCharacters.png";
}, false);