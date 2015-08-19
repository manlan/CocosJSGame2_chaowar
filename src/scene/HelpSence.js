var HelpSenceLayer = cc.Layer.extend({
	_winSize:null,

	ctor:function () {
		this._super();

		cc.log("---------------HelpSenceLayer-----------");
		this._winSize = cc.director.getWinSize();
		this.initMain();
	},

	initMain :function() {
		var bgImg = new cc.Sprite(res.helpBg_png);
		bgImg.attr({anchorX: 0.5, anchorY: 0.5, 
			x : 240, 
			y : this._winSize.height/2}); // x:240, y:280
		this.addChild(bgImg);

		//加载帮助介绍
        var btnBack = new cc.MenuItemImage(res.btnBack_png, res.btnBackDown_png, null, 
           function () {
               cc.log("------goBackMainMenu");
               util.playEffect(MusicSceneType.BUTTON_CLICK);

                cc.director.runScene(new MainMenuSenceLayer() );
           }, this);
       btnBack.attr({
           x: 10, y: 10, anchorX: 0, anchorY: 0 });

       // 菜单
       var menu = new cc.Menu(btnBack, null);
       menu.attr({
           x: 410, y: 275, 
           anchorX: 0, anchorY: 0 }); 
       this.addChild(menu, 2);
	},
});

var HelpSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------HelpSence-----------");
		var layer = new HelpSenceLayer();
		this.addChild(layer);
	}
});