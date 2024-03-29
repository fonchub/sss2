"use strict";
cc._RF.push(module, '09db6qY1x9IrIdvV3VFAYc8', 'TakeMJCard');
// module/game/majiang/script/cards/TakeMJCard.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        target: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.clickstate = false;
    },
    onClick: function onClick() {
        var handCards = this.target.getComponent("HandCards");
        var self = this;
        if (this.clickstate == true) {
            //出牌
            this.node.dispatchEvent(new cc.Event.EventCustom('takecard', true));
        } else {
            if (handCards.take == true) {
                handCards.take = false;
                this.target.y = this.target.y - 30;
            } else {
                handCards.take = true;
                this.target.y = this.target.y + 30;
            }
            this.clickstate = true;
            setTimeout(function () {
                //双击算法
                self.clickstate = false;
            }, 500);
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();