//SelectSence

var SelectSenceLayer = BaseMenuLayer.extend({
	ctor:function () {
		this._super();

		cc.log("---------------SelectSenceLayer-----------");

		// TODO:调用基类，函数
		this._menu.setPosition(cc.p(410, 25 + 30) ); 
		this._backgroundImg.setTexture(res.selectWaveBg_png);

		//加载帮助介绍
        var btnUpdate = new cc.MenuItemImage(res.btnUpdate_png, res.btnUpdateDown_png, null, 
           function () {
               cc.log("------goBackMainMenu");
               util.playEffect(MusicSceneType.BUTTON_CLICK);

                cc.director.runScene(new MainMenuSenceLayer() );
           }, this);
       btnUpdate.attr({
           x: -110, y: 10, anchorX: 0, anchorY: 0 });
       this._menu.addChild(btnUpdate);

       var btnReset = new cc.MenuItemImage(res.btnReset_png, res.btnResetDown_png, null, 
           function () {
               cc.log("------baseDialog");
               util.playEffect(MusicSceneType.BUTTON_CLICK);
               
               var dialog = new BaseDialog();
               dialog.attr({ x: 25, y: 25 , anchorX: 0, anchorY: 0 });
               this.addChild(dialog, 2);	
           }, this);
       btnReset.attr({
           x: -480 + 80, y: 280, anchorX: 0, anchorY: 0 });
       this._menu.addChild(btnReset);
       
		// this._super.setMenuPosition(cc.p(410, 315) ); 
	},
});

var SelectSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------SelectSence-----------");
		var layer = new SelectSenceLayer();
		this.addChild(layer);
	}
});