/// <reference path="../phaser/phaser.comments.d.ts" />
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", {
            preload: this.preload,
            create: this.create
        });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image("splash", "assets/images/phaser.png");
    };
    SimpleGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "splash");
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
        this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2500, Phaser.Easing.Bounce.Out, true);
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
