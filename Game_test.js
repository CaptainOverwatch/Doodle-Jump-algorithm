var app = new PIXI.Application(1200, 600, {backgroundColor : "#000"});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('./bunny.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

function rotation(delta) {
  bunny.rotation = 0.5;
}
rotate(0.5);



// create a new Sprite from an image path
/* function move(x, y, minX, minY, deltaX, deltaY, firstDirection, secondDirection){

  var platform = PIXI.Sprite.fromImage('./Platform1.png')

  // center the sprite's anchor point
  platform.anchor.set(0.5);

  // move the sprite to the center of the screen
  platform.x = x;
  platform.y = y;

  app.stage.addChild(platform);

  var direction = 'right'
  var movement = function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    if(direction =='right'){
      platform.x += 1;
    }
    if(direction =='left'){
      platform.x -= 1;
    }
    if (platform.x >= 200) {
      direction = 'left';
    }
    if (platform.x <= 0) {
      direction = 'right'
    }
  }

  // Listen for animate update
  app.ticker.add(movement);

}

move(200, 400, 200, 400, 20,20, x,y) */
