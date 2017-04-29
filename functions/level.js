var points = new createjs.Text("", "12px Arial", "#ff7700");
function changeLevel(number) {
    switch (number) {
        case 1:
            bitmap = new createjs.Bitmap("images/Level1.png");
            testKey.x = 1320;
            testKey.y = 400;
            testGoal.x = 250;
            testGoal.y = 500;
            stage.addChild(mapBitmap, bitmap, testGoal, player, testKey);
            stage.update();
            break;
        case 2:
            stage.removeAllChildren();
			resetKey();
			bitmap = new createjs.Bitmap("images/Level2.png");
            player.x = 10;
            player.y = 10;
			testKey.x = 1260;
			testKey.y = 180;
            testGoal.x = 1260;
            stage.addChild(mapBitmap, bitmap, testGoal, player, testKey);
            stage.update();
            break;
        case 3:
            stage.removeAllChildren();
			resetKey();
			bitmap = new createjs.Bitmap("images/Level3.png");
            player.x = 1300;
            player.y = 30;
			testKey.x = 275;
			testKey.y = 490;
            testGoal.x = 60;
            testGoal.y = 60;
            stage.addChild(mapBitmap, bitmap, testGoal, player, testKey);
            stage.update();
            break;
		case 4:
			stage.removeAllChildren();
			stage.addChild(win);
			winSound();
			stage.update();
			break;
		case 5:	
			stage.removeAllChildren();
			stage.addChild(lose);
			stage.update()
			break;
    }

}

function lose(){
	changeLevel(5);
}

function resetKey(){
	collision = false;
    createjs.Tween
            .get(testKey)
            .wait(200)
            .to({ alpha: 1, visible: true }, 750);
}

function getPnts() {
    var number = 1;
    var fName = bitmap.image.currentSrc;
    var source = fName.substr(fName.length - 10);
    switch (source) {
        case "Level1.png":
            number = 0;
            break;
        case "Level2.png":
            number = 1;
            break;
        case "Level3.png":
            number = 2;
            break;
    }
    return number;
}