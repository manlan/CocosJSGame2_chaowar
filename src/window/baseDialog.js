
//dialog 2015年08月20日16:21:01

var BaseDialog = cc.Layer.extend({
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
		this._backgroundImg = new cc.Sprite(res.resetBg_png);
		this._backgroundImg.attr({anchorX: 0.5, anchorY: 0.5, 
			x : 240, 
			y : this._winSize.height/2}); // x:240, y:280
		this.addChild(this._backgroundImg);

		//加载帮助介绍
        var btnYes = new cc.MenuItemImage(res.btnYes_png, res.btnYes_png, null, 
           function () {
               cc.log("------goBackMainMenu");
               util.playEffect(MusicSceneType.BUTTON_CLICK);

               cc.log("===========reset data====");
               // TODO:重设战斗数据
               this.removeFromParent();

           }, this);
       btnYes.attr({
           x: 25, y: -50, anchorX: 0, anchorY: 0 });

       var btnNo = new cc.MenuItemImage(res.btnNo_png, res.btnNo_png, null, 
           function () {
               cc.log("------goBackMainMenu");
               util.playEffect(MusicSceneType.BUTTON_CLICK);

               // this.setVisible(false);
               this.removeFromParent();

           }, this);
       btnNo.attr({
           x: 150, y: -50, anchorX: 0, anchorY: 0 });	// TODO: 窗口位置:中间

       // 菜单
       this._menu = new cc.Menu(btnYes, btnNo, null);
       // this._menu.attr({ x:240, y:this._winSize.height/2, anchorX: 0.5, anchorY: 0.5 });
       this._menu.attr({ x:100, y:this._winSize.height/2, anchorX: 0, anchorY: 0 });
       this.addChild(this._menu, 4);
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

