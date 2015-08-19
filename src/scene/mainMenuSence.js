var MainMenuSenceLayer = cc.Layer.extend({
	_sprite:null,
	_winSize:null,

	ctor:function () {
		this._super();
		
		cc.log("---------MainMenuSenceLayer1----------");
		this._winSize = cc.director.getWinSize();

		this.initBackgroundLayer();

		// 加载plist
        cc.spriteFrameCache.addSpriteFrames(res.dpsg_plist, res.dpsg_png);
//        cc.textureCache.addImage(res.dpsg_png);
        // this.initPlist();
        // this.bakeLayer();
	},

	initBackgroundLayer:function () {
		//加载背景图片
		var bgImg = new cc.Sprite(res.mainMenuBg_png);
		bgImg.attr({anchorX: 0.5, anchorY: 0.5, 
			x : this._winSize.width/2, 
			y : this._winSize.height/2 }); // w: 240
		bgImg.setScale(1);
		this.addChild(bgImg);

		//加载logo图片
		var logoImg = new cc.Sprite(res.logo_png);
		logoImg.attr({anchorX: 0.5, anchorY: 0.5, 
			x : this._winSize.width/2, 
			y : this._winSize.height/4*3}); // x:240, y:280
		logoImg.setScale(1);
		this.addChild(logoImg);

		// 文本
		var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
		helloLabel.x = 100;
		helloLabel.y = this._winSize.width/2;
		this.addChild(helloLabel, 5);

		// ----菜单----
		var btnMusic = "res/Music/btn.wav";

		var btnPlay = new cc.MenuItemImage(res.btnPlay_png, res.btnHelpdown, null,
           function () {
               cc.log("------btnPlay!");
               cc.audioEngine.playEffect(btnMusic);
               helloLabel.setColor(cc.color(200,0,0) ); 
           }, this);
       btnPlay.attr({
           x: 240, y: 115, anchorX: 0.5, anchorY: 0.5 });

		var btnCredits = new cc.MenuItemImage(res.btnCredit_png, res.btnCreditdown_png, null,
           function () {
               cc.log("------goToCreditsSence");
               cc.audioEngine.playEffect(btnMusic);
               helloLabel.setColor(cc.color(0,200,0) ); 
           }, this);
       btnCredits.attr({
           x: 240, y: 50, anchorX: 0.5, anchorY: 0.5 });

        //加载成就
        var btnMusic = "res/Music/btn.wav";

       var btnArch = new cc.MenuItemImage(res.btnArchievement_png, res.btnArchievementdown_png, null,
           function () {
               cc.log("------goToArchSence");
               cc.audioEngine.playEffect(btnMusic);
               helloLabel.setColor(cc.color(0,0, 200) ); 
           }, this);
       btnArch.attr({
           x: 375, y: 50, anchorX: 0.5, anchorY: 0.5 });
        
        //加载帮助介绍
        var btnHelp = new cc.MenuItemImage(res.btnHelp_png, res.btnHelpdown_png, null, 
           function () {
               cc.log("------goToHelpSence");
               cc.audioEngine.playEffect(btnMusic);
               helloLabel.setColor(cc.color(200, 200, 0) ); 
           }, this);
       btnHelp.attr({
           x: 120, y: 50, anchorX: 0.5, anchorY: 0.5 });

       // 菜单
       var menu = new cc.Menu(btnPlay, btnCredits, btnArch,  btnHelp, null);
       menu.attr({
           x: 240 - 80, y:115, 
           anchorX: 0, anchorY: 0 });  // x:240, y:115
       this.addChild(menu, 2);
	},

	onBackTouchEvent : function(sender, type) {
		cc.log("--onBackTouchEvent--");

        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                util.playEffect(MusicSceneType.BUTTON_CLICK);
                sender.setScale(1.05);
                break;
            case ccui.Widget.TOUCH_ENDED:
                sender.setScale(1.00);
                break;
            default:
                break;
        }
    },

	initPlist:function() {
    	cc.log("----------------dpsg.plist-----------");
    	
    	var sp1 = new  cc.Sprite("#di_bt_icon_1.png");
//    	sp1.setAnchorPoint(0, 0);
    	sp1.attr({
    		x: 100,
    		y: 100,
    		AnchorX:0,
    		AnchorY:0
    	})
    	this.addChild(sp1, 2);
    	
    		
    	var sp2 = new  cc.Sprite("#di_bt_icon_4.png");
//  	sp1.setAnchorPoint(0, 0);
    	sp2.attr({
    		x: 200,y: 100,AnchorX:0,AnchorY:0
    	})
    	this.addChild(sp2, 2);
    	
    	var sp3 = new  cc.Sprite("#di_bt_icon_5.png");
//  	sp1.setAnchorPoint(0, 0);
    	sp3.attr({
    		x: 300,
    		y: 100,
    		AnchorX:0,
    		AnchorY:0
    	})
    	this.addChild(sp3, 2);
    	
    	//////
    	var res1 = new  cc.Sprite(res.di_bt_icon_1_png);
//  	sp1.setAnchorPoint(0, 0);
    	res1.attr({
    		x: 100,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res1, 2);
    	
    	var res2 = new  cc.Sprite(res.di_bt_icon_3_png);
//  	sp1.setAnchorPoint(0, 0);
    	res2.attr({
    		x: 200,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res2, 2);
    	
    	var res3 = new  cc.Sprite(res.di_bt_icon_4_png);
//  	sp1.setAnchorPoint(0, 0);
    	res3.attr({
    		x: 300,y: 300,AnchorX:0,AnchorY:0
    	})
    	this.addChild(res3, 2);
    },
    
    bakeLayer:function() {
    	cc.log("bake");
//    	this.bake();
    },
});

var MainMenuSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------Main1-----------");
		var layer = new MainMenuSenceLayer();
		this.addChild(layer);
	}
});