
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180
        });
        this.addChild(this.sprite, 0);

        this.sprite.runAction(
            cc.sequence(
                cc.rotateTo(2, 0),
                cc.scaleTo(2, 1, 1)
            )
        );
        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 40)),
                cc.tintTo(2.5,255,125,0)
            )
        );
        return true;
    }
});

/*
var MainMenuSenceLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		this._super();
		cc.log("---------MainMenuSenceLayer----------");

		//加载背景图片
//		var bgImg = new ccui.ImageView(res.mainMenuBg_png);
//		bgImg.attr({anchorX: 0.5, anchorY: 0.5, x : 240, y : cc.director.getWinSize().width/2 });
//		this.addChild(powerPng, 2);

		//加载logo图片
//		var logoImg = new ccui.ImageView(res.logo_png);
//		logoImg.attr({anchorX: 0.5, anchorY: 0.5, x : 240, y : 280});
//		this.addChild(logoImg, 2);

		// 文本
		var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
		helloLabel.x = 100;
		helloLabel.y = 0;
		this.addChild(helloLabel, 5);
	},
});
*/

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer(); // MainMenuSenceLayer  HelloWorldLayer
        this.addChild(layer);
    }
});

//var MainMenuSence = cc.Scene.extend({
//	onEnter:function () {
//		this._super();
//		cc.log("---------------Main-----------");
//		var layer = new MainMenuSenceLayer();
//		this.addChild(layer);
//	}
//});
