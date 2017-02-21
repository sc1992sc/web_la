/**
 * Created by Administrator on 2016/12/19.
 */
var myDirective=angular.module('directive',['sever'])

var web='http://dzadmin.dsnic.com';

var urlforsaleupdate=web+'/home/index/sales_updata';

/**
 * 提示框
 */
myDirective.directive('alertBar',[function(){
    return {
        restrict: 'EA',
        templateUrl: './tpls/alertBar.html',
        scope : {
            message : "=",
            til : "="
        },
        link: function(scope, element, attrs){

            scope.hideAlert = function() {
                scope.message = null;
                scope.til = null;
            };

        }
    };
}]);

/**添加选中**/
myDirective.directive('addactive',function(){
    return{
        scope:false,
        link:function(scope,element,attr,ctrl){
            element.bind("click",function(){
                element.addClass("active").siblings().removeClass("active");
            })
        }
    }
});

/**选项卡**/
myDirective.directive('tab',function(){
    return{
        scope:false,
        link:function(scope,element,attr,ctrl){
            element.bind("click",function(){
                element.addClass("active").siblings().removeClass("active");
                element.parent().next().find(".tabCon").eq(element.index()).fadeIn().siblings().hide()
            })
        }
    }
});

/*在职状态切换*/
myDirective.directive('jobstatus',function(EventBus){
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : false,
        template : '<dd ng-click="toggle()">'
            + '<span ng-show="item.status==1">在职</span><span ng-show="item.status==0">离职</span>'
            + '</dd>',
        link : function(scope, element, attrs) {
            scope.toggle = function toggle() {
                if( scope.item.status==1){
                    scope.item.status=0;
                }else if(scope.item.status==0){
                    scope.item.status=1
                }
                EventBus.fire({
                    type: "updata",
                    data: {
                        status:scope.item.status
                    }
                });
            }
        }
    }
});