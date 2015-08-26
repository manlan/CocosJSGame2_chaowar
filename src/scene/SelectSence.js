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
       
       // --- 添加按钮 -- 
		var bgWave = new cc.Sprite(res.waveStation_png);
        bgWave.attr({anchorX: 0.5, anchorY: 0.5, x : 100, y : 20 });
        this.addChild(bgWave);

        // 魔法按钮
		 //var btnMagic = new ccui.Button(res.waveStation_png, res.waveStationLight_png );
        // btnMagic.attr({x : 410, y : 60, anchorY:0.5, anchorY: 0.5 });
        // btnMagic.addTouchEventListener(this.onbtnMagicTouchEvent, this);
        // this.addChild(btnMagic, 101);

        //var sprMagic =      new cc.Scale9Sprite(res.btnWaveStation_png);
        //var sprMagicDown = new cc.Scale9Sprite(res.waveStationLight_png);
        //var strMagic = new cc.LabelTTF("Magic", "Arial", 18);
        //
        //var btnMagic = new cc.ControlButton(strMagic, sprMagic);
        //btnMagic.setBackgroundSpriteForState(sprMagic, sprMagicDown);
        //btnMagic.attr({x : 410, y : 60, anchorY:0.5, anchorY: 0.5 });
         //btnMagic.addTouchEventListener(this.onbtnMagicTouchEvent, this);

        //var strMagic = new cc.LabelTTF("Magic", "Arial", 18);

        var btnMagic = new ccui.Button(res.btnWaveStation_png, res.waveStationLight_png );
        btnMagic.addTouchEventListener(this.onbtnMagicTouchEvent, this);
        //strMagic.attr({x : 410, y : 60, anchorY:0.5, anchorY: 0.5 });
        btnMagic.attr({x : 60, y : 90 + 60, anchorY:0.5, anchorY: 0.5 });
        this.addChild(btnMagic);
	},

	onbtnMagicTouchEvent:function() {
		cc.log("----- onbtnMagicTouchEvent");

        var dialog = new BaseDialog();
        this.addChild(dialog, 100);
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