var BaseMenuLayer = cc.Layer.extend({
	_winSize:null,
	_backgroundImg:null,
	_menu:null,

	ctor:function () {
		this._super();

		cc.log("---------------baseMenuLayer-----------");
		this._winSize = cc.director.getWinSize();

		this.initMain();
	},

	initMain :function() {
		this._backgroundImg = new cc.Sprite(res.helpBg_png);
		this._backgroundImg.attr({anchorX: 0.5, anchorY: 0.5, 
			x : 240, 
			y : this._winSize.height/2}); // x:240, y:280
		this.addChild(this._backgroundImg);

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
       this._menu = new cc.Menu(btnBack, null);
       this._menu.attr({
           x: 410, y: 275, 
           anchorX: 0, anchorY: 0 }); 
       this.addChild(this._menu, 2);
	},

	setBackgroundImg:function(resIMG) {
		cc.log("------setBackgroundImg");
		if(this._backgroundImg)
		{
			if(resIMG) {
				this._backgroundImg.setTexture(resIMG);
			}
		}
	},

	setMenuPosition:function(ccPoint) {
		cc.log("------setMenuPosition");
		if(this._menu)
		{
			if(ccPoint) {
				this._menu.setPosition( cc.p(ccPoint.x, ccPoint.y) );
			}
		}
	},
});

var BaseMenuScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------baseMenuScene-----------");
		var layer = new BaseMenuLayer();
		this.addChild(layer);
	}
});