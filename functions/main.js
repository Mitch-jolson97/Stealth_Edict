//objects
var stage, lives, player, canvas, ui;
var win, lose;
var goal, testKey; 
var player;
var playerSheet;
var testGoal;
var bitmap, mapBitmap, bottomMapBitmap;
var capture;

//Moving Player
var dx = 3; //change in x
var dy = 3; //change in y
var x = 50; //start x
var y = 50; //start y
var WIDTH = 1350; //border
var HEIGHT = 615; //border
var moving = 0;
var previousmoving = 7;

//keys
var keyPress = {};
var W_KEY = 87;
var D_KEY = 68;
var S_KEY = 83;
var A_KEY = 65;

//time
var timeText;
var startTime;
var pointText;

//function load
function load() {
//Preload
	queue = new createjs.LoadQueue(false);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", titleView);
	queue.loadManifest([
		{id: "beep", src: "sound/click.mp3"},
		{ id: "save", src: "sound/save.mp3" },
        { id: "win", src: "sound/victory.mp3" }
	]);
}	
//generates menu
function titleView() {
    stage = new createjs.Stage("canvas");
    //create background as Bitmap
    bg = new createjs.Bitmap("images/menu.jpg");
    //Add title image
    title = new createjs.Bitmap("images/title.png");
    title.x = 400;
    title.y = 140;
    title.name = 'Start';


    //Start button
    start = new createjs.Bitmap("images/start.png");
    start.x = 530;
    start.y = 400;
    start.name = 'Play';

    //Create hit area for start button
    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 255, 173);
    start.hitArea = hit;

    start.addEventListener("click", function (event) { init()});
    stage.addChild(bg, title, start);
    stage.update();
}
//init function
function init() {
	beep();
    stage = new createjs.Stage("canvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
	//Images for bitmaps
	testGoal = new createjs.Bitmap("images/computer.png");
	testKey = new createjs.Bitmap("images/floppydisk.png");
	capture = false;
	mapBitmap = new createjs.Bitmap("images/mapBack.png");
	bottomMapBitmap = new createjs.Bitmap("images/bottomCanvas.png");
	win = new createjs.Bitmap("images/mapWin.png");
	lose = new createjs.Bitmap("images/mapLose.png");
    //lives = 3;

    window.addEventListener('keydown', doKeyDown);
    window.addEventListener('keyup', doKeyUp);

	
//sprite sheet stuff and animation---------------------------------------------------------------------------------------------
 
	
	player = createPerson("images/player.png", 10, 10);
	//redDisk1 = createDisk("images/flopydiskred.png", 60, 60);
		
	
	

//sprite sheet stuff and animation end----------------------------------------------------------------
	titleView();
	changeLevel(1);
	addUI();
	startTime = 360;
	var tt = setInterval(timer, 1000);
    stage.update();
	
	createjs.Ticker.on("tick", handleTick);
    function handleTick(event) {
        stage.update(event);
    }
}


function beep(){
	createjs.Sound.play("beep");
}

function tick(e) {
    move();
    stage.update();
}

function winSound() {
    createjs.Sound.stop();
    createjs.Sound.play("win");
}


function addUI() {
    ui = new createjs.Stage("canvasUI");
    createjs.Ticker.addEventListener("count", timer);
    pointText = new createjs.Text("Points: ", "20px Arial", "#ff7700");
    pointText.x = 1170;
	timeText = new createjs.Text("", "20px Arial", "#ff7700");
	timeText.x = 10;
	ui.addChild( bottomMapBitmap, timeText, pointText);
	ui.update();
}

function timer(e) {
	var currentTime = startTime--;
	var time = currentTime;
	if (time == 0) {
	    changeLevel(5);
	}
	else
	    pointText.text = "Points: " + getPnts();
	    timeText.text = "Time left: " + parseInt(time/2) + "s";
	ui.update();
}

