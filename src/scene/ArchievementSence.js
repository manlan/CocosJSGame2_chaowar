var ArchievementLayer = BaseMenuLayer.extend({
	ctor:function () {
		this._super();

		cc.log("---------------ArchievementLayer-----------");


		// TODO:调用基类，函数
		this._menu.setPosition(cc.p(410, 315) ); 
		// this._super.setMenuPosition(cc.p(410, 315) ); 
	},
});


var ArchievementSence = cc.Scene.extend({
	ctor:function () {
	// onEnter:function () {
		this._super();
		
		cc.log("---------------ArchievementSence-----------");
		var layer = new ArchievementLayer();
		this.addChild(layer);
	}
});