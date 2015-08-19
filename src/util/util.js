var util = util || {};

var MusicSceneType = {
	BG_MUSIC		: 0,
    MAIN_LAYER      : 1,  //主界面
    BUTTON_CLICK    : 2,  //按钮点击
    BUTTON_CANCEL 	: 3,  //取消、返回等
};

util.playEffect = function(sceneType, loop) {
    var musicUrl = null;
    //if(cc.sys.localStorage.getItem("isPlayEffect") == 2){
    //    cc.audioEngine.stopAllEffects();
    //    return;
    //}

    switch (sceneType) {

        case MusicSceneType.BUTTON_CLICK :
            musicUrl = "btn.wav";
            break;
        case MusicSceneType.BUTTON_CANCEL :
        	musicUrl = "U027.mp3";
        	break;
        default :
            break;
    }

    if(musicUrl != null && GC.SOUND_ON) {
        if(loop === undefined)
            loop = false;

        cc.audioEngine.playEffect("res/Music/" + musicUrl);
    }
};

util.playMusic = function(sceneType, loop) {
    var musicUrl = null;

    switch (sceneType) {
        case MusicSceneType.BG_MUSIC :
            musicUrl = "mainBg.mp3";
            break;

        default :
            break;
    }
    if(musicUrl != null && GC.SOUND_ON) {
        if(loop === undefined)
            loop = false;
        cc.audioEngine.playMusic("res/Music/" + musicUrl, true);
    }
};