var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by egret on 15-1-7.
 */
var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    /**
     * 构造函数
     */
    function LoadingScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    LoadingScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Popup);
        //初始打开Loading页面
        App.ViewManager.open(ViewConst.Loading);
    };
    /**
     * 退出Scene调用
     */
    LoadingScene.prototype.onExit = function () {
        //super.onExit();
        //关闭loadingScene中的所有View
        App.ViewManager.close(ViewConst.Loading);
        //移除自身所有的layer
        this.removeAllLayer();
    };
    return LoadingScene;
}(BaseScene));
__reflect(LoadingScene.prototype, "LoadingScene");
//# sourceMappingURL=LoadingScene.js.map