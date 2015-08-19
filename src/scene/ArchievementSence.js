var ArchievementLayer = BaseMenuLayer.extend({
	ctor:function () {
		this._super();

		cc.log("---------------ArchievementLayer-----------");

	},
});


var ArchievementSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------ArchievementSence-----------");
		var layer = new ArchievementLayer();
		this.addChild(layer);
	}
});