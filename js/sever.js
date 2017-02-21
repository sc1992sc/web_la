/**
 * Created by Administrator on 2016/12/19.
 */
var sever=angular.module("sever",[]);

sever.factory('EventBus',function(){
    var eventMap = {};

    var EventBus={
        on : function(eventType, handler) {
            //multiple event listener
            if (!eventMap[eventType]) {
                eventMap[eventType] = [];
            }
            eventMap[eventType].push(handler);
        },

        off : function(eventType, handler) {
            for (var i = 0; i < eventMap[eventType].length; i++) {
                if (eventMap[eventType][i] === handler) {
                    eventMap[eventType].splice(i, 1);
                    break;
                }
            }
        },

        fire : function(event) {
            var eventType = event.type;
            if (eventMap && eventMap[eventType]) {
                for (var i = 0; i < eventMap[eventType].length; i++) {
                    eventMap[eventType][i](event);
                }
            }
        }
    }

    return EventBus;
})

sever.factory('TipService', ['$timeout', function($timeout) {
    return {
        message : null,
        til : null,
        setMessage : function(msg,type){
            this.message = msg;
            this.til = type;

            //提示框显示最多3秒消失
            var _self = this;
            $timeout(function(){
                _self.clear();
            },1500);
        },
        clear : function(){
            this.message = null;
            this.til = null;
        }
    };
}]);
