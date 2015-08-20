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
			x : 240, y : this._winSize.height/2}); // x:240, y:280
		this.addChild(bgImg);

		//加载帮助介绍
        var btnBack = new cc.MenuItemImage(res.btnBack_png, res.btnBackDown_png, null, 
           function () {
               cc.log("------goBackMainMenu");
               util.playEffect(MusicSceneType.BUTTON_CLICK);

                cc.director.runScene(new MainMenuSenceLayer() );
           }, this);
       btnBack.attr({x: 10, y: 10, anchorX: 0, anchorY: 0 });

       // 菜单
       var menu = new cc.Menu(btnBack, null);
       menu.attr({x: 410, y: 275, anchorX: 0, anchorY: 0 });
       this.addChild(menu, 2);

       //加载介绍
       var labelExplain = new cc.LabelTTF("Explain", "Arial", 16);
	   labelExplain.enableStroke(ccBLACK, 3);
	   labelExplain.attr({ x: 310, y: 320, anchorX: 0, anchorY: 0 });
	   this.addChild(labelExplain);

	   // 加载8个框框
	   cc.log("\n\n ------helpList_plist------");
	   // var helpData = cc.PlistParser.parse("res/HelpSence/helpList.plist");

   		var myplist = "res/HelpSence/helpList.plist";
   		// var myplist = "res/HelpSence/helpList.plist";
		cc.loader.loadTxt(myplist, function(err, txt){
            if(!err){
                var data = cc.plistParser.parse(txt);
                                //data 就是一个表就是你需要的
                                //下面是测试打印数据
                for (var key in data) {
                    cc.log(key + "," + data[key][0].picName );

                    // for (var i = data[key].length - 1; i >= 0; i--) {
                    // 	cc.log( " datakey: " + data[key][i] );
                    // };
                }
            }
        });

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