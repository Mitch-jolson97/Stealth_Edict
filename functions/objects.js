/*
function createDisk (imageSource, x, y) {
	this.imageSource = imageSource;
	this.spriteSheet = new createjs.SpriteSheet({
		framerate: 30,
		images: [imageSource],
		frames: {width: 15, height: 15}, 
		animations: {"blink": [0, 1, "blink", .04]
		} 
    });
	
	this.sprite = new createjs.Sprite(spriteSheet, 'blink');
	sprite.x = x; sprite.y = y;
	
		return sprite;
	}
	

		how to create	
		var blueDisk1 = createDisk("images/flopydisk.png", 30, 30);
		var redDisk1 = createDisk("images/flopydiskred.png", 60, 60);
		stage.addChild(blueDisk1, redDisk1);
		stage.update();
*/

function createPerson (imageSource, x, y) {
	this.imageSource = imageSource;
	this.startAnime = startAnime;
	
	 personSheet = new createjs.SpriteSheet({
		framerate: 30,
		images: [imageSource],
		frames: {width: 32, height: 32, regX: 0, regY: 0}, //count # of frames
		animations: {
		    down: [0, 2, "down", .04],
            left: [3, 5, "left", .04],
            right: [6, 8, "right", .04],
            up: [9, 11, "up", .04],
			stand:   [1, 1, "stand", .04]
		}
    });
	
	this.sprite = new createjs.Sprite(personSheet);
	sprite.x = x; sprite.y = y;
	
		return sprite;
	}
	
/*
		how to create	
		var player = createDisk("images/player.png", 10, 10, "RunLeft");
		var guard1 = createDisk("images/gard.png", 110, 110, "RunLeft");
		stage.addChild(player, gard1);
		stage.update();
*/