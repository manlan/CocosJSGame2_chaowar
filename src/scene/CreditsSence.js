var CreditsSenceLayer = cc.Layer.extend({
	ctor:function () {
		this._super();

		cc.log("---------------CreditsLayer-----------");
	},
});

var CreditsSence = cc.Scene.extend({
	onEnter:function () {
		this._super();
		
		cc.log("---------------CreditsSence-----------");
		var layer = new CreditsSenceLayer();
		this.addChild(layer);
	}
});