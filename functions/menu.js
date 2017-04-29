var start, menu, bg;

function titleView() {
    start.x = 240 - 31.5;
    start.y = 160;
    start.name = 'Play';

    stage.addChild(menu, start);
    stage.addChild(bg, TitleView);
    stage.update();

    // Button Listeners

    start.onPress = load();
}