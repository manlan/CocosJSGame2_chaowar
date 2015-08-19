var MainMenuSenceLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		this._super();
		
		cc.log("---------MainMenuSenceLayer----------");

		//加载背景图片
		// var bgImg = new ccui.ImageView(res.mainMenuBg_png);
		// bgImg.attr({anchorX: 0.5, anchorY: 0.5, x : 240, y : cc.director.getWinSize().width/2 });
		// this.addChild(powerPng, 2);

		// //加载logo图片
		// var logoImg = new ccui.ImageView(res.logo_png);
		// logoImg.attr({anchorX: 0.5, anchorY: 0.5, x : 240, y : 280});
		// this.addChild(logoImg, 2);

		// 文本
		var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
		helloLabel.x = 100;
		helloLabel.y = 100;
		this.addChild(helloLabel, 5);
	},
});

var MainMenuSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------Main-----------");
		var layer = new MainMenuSenceLayer();
		this.addChild(layer);
	}
});