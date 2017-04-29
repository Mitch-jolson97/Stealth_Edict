function doKeyDown(evt) {
    keyPress[evt.keyCode] = true;
}

//after key is released delete the
function doKeyUp(evt) {
     keyPress[evt.keyCode] = false;
	 player.gotoAndPlay('stand');
	 moving = 0;
}

//changes players x and y apon key press
function move() {
    if (keyPress[W_KEY]) {moving = 1; player.y -= dy;}
    if (keyPress[S_KEY]) {moving = 2; player.y += dy;}
	if (keyPress[A_KEY]) {moving = 3; player.x -= dx;}
    if (keyPress[D_KEY]) {moving = 4; player.x += dx;}
	setDirection();
	stayOnScreen();
    stage.update();
} 

//changes animation
function setDirection(){
	if (moving != previousmoving){   
	if (moving == 0) player.gotoAndPlay('stand');
	if (moving == 1) player.gotoAndPlay('up');
	if (moving == 3) player.gotoAndPlay('left');
	if (moving == 2) player.gotoAndPlay('down');
	if (moving == 4) player.gotoAndPlay('right');
	}
	previousmoving = moving;
}

//players x and y stay within the canvas (working)
function stayOnScreen() {
    var intersection = ndgmr.checkRectCollision(player, testGoal);
    var key = ndgmr.checkRectCollision(player, testKey);
    if (key) {
		createjs.Sound.play("save");
        createjs.Tween
            .get(testKey)
            .wait(200)
            .to({ alpha: 0, visible: false }, 750);
        capture = true;
    }
    if (intersection && capture) {
        var fName = bitmap.image.currentSrc;
        var source = fName.substr(fName.length - 10);
        switch (source) {
            case "Level1.png":
                changeLevel(2);
				capture = false;
				intersection = false;
                break;
            case "Level2.png":
				capture = false;
				intersection = false;				
                changeLevel(3);
                break;
			case "Level3.png":
				//win();
				changeLevel(4);
				break;
				
        }

    }
    var collision = ndgmr.checkPixelCollision(player, bitmap, 0.5, true);
    if (collision) {
        if (keyPress[W_KEY]) player.y += dy;
        if (keyPress[S_KEY]) player.y -= dy;
        if (keyPress[A_KEY]) player.x += dx;
        if (keyPress[D_KEY]) player.x -= dx;
        player.x = player.x;
        player.y = player.y;
    }
	if (player.x > WIDTH -32) {player.x = WIDTH -32;}
	if (player.x < 0) {player.x = 0;}
	if (player.y > HEIGHT - 32) {player.y = HEIGHT -32;}
	if (player.y < 0) {player.y += dy;}
}