//I can not get them to work in game as sperate files
//paste into bobUpdate to work
//line 100 in bobupdate works as example
//it makes two floppy disks








//floppy disk create function
function creatfloopyDisk (imageSource, x, y) {
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
	
/*
		how to create	
		var blueDisk1 = creatfloopyDisk("images/flopydisk.png", 30, 30);
		var redDisk1 = creatfloopyDisk("images/flopydiskred.png", 60, 60);
		stage.addChild(blueDisk1, redDisk1);
		stage.update();
*/

//__________________________________________________________________________________________________________________

//Person create function
function creatPerson (imageSource, x, y, startAnime) {
	this.imageSource = imageSource;
	this.startAnime = startAnime;
	
	personSheet = new createjs.SpriteSheet({
		framerate: 30,
		images: [imageSource],
		frames: {width: 32, height: 32, regX: 0, regY: 0, count: 12}, 
		animations: {"RunRight": [6, 8, "RunRight", .04],
		"RunLeft": [3, 5, "RunLeft", .04],
		"RunUp":   [9, 11, "RunUp", .04],
		"RunDown": [0, 2, "RunDown", .04],
		"stand":   [1, 1, "stand", .04]
		} 
    });
	
	this.sprite = new createjs.Sprite(personSheet, startAnime);
	sprite.x = x; sprite.y = y;

	
		return sprite;
	}
	
/*
		how to create	
		var player = creatfloopyDisk("images/player.png", 10, 10, "RunLeft");
		var guard1 = creatfloopyDisk("images/gard.png", 110, 110, "RunLeft");
		stage.addChild(player, gard1);
		stage.update();
*/