/**
 * Created by Administrator on 2016/12/19.
 */
var myModule=angular.module("myModule",[
    'ngMessages',
    'ui.router',
    'controller',
    'sever',
    'directive'
]);

myModule.run(function($rootScope,$state,EventBus) {
//    var t=0;
//
//    $.ajax({
//        type: "get",
//        url: 'http://test20.com.dsnic.com/seller.php/Home/Index/base',
//        dataType:"jsonp",
//        success: function(result){
//            $rootScope.webInfo=result.info;
//            if(result.info.username){//判断是否登录
//                $rootScope.user_status=true
//            }else{
//                $rootScope.user_status=false
//                $state.go('main.sigin')
//            }
//        }
//    })
//
//    var linster=$rootScope.$on('$stateChangeStart',function(event,tostate,toparams,formstate,formParams){//登录控制
//        if(t>0){
//            if(!$rootScope.user_status&&tostate.name!='main.sigin'&&tostate.name!='main.register'){
//                event.preventDefault();
//                $state.go('main.sigin')
//            }
//        }
//        t++;
//    })
});



/*过滤器*/
myModule.filter("filter1",function(){
    return function(input){
        if(input==0){
            input=''
        }
        return input;
    }
});
myModule.filter('trustHtml', ['$sce',function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}])

//路由配置
myModule.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/createOrder");
    $stateProvider
        .state('content',{
            url:'/',
            abstract:true,
            views:{
                '':{templateUrl:'./tpls/content.html'},
                'menu@content':{templateUrl:'./tpls/menu.html'}
            }
        })
        .state('content.createOrder',{
            url:'createOrder',
            views:{
                'content@content':{templateUrl:'./tpls/createOrder.html'}
            }
        })
        .state('content.sales',{
            url:'sales',
            views:{
                'content@content':{templateUrl:'./tpls/sale.html'}
            }
        })
        .state('content.addsale',{
            url:'addsale',
            views:{
                'content@content':{templateUrl:'./tpls/addsale.html'}
            }
        })
        .state('content.orders',{
            url:'',
            abstract:true,
            views:{
                'content@content':{templateUrl:'./tpls/ordertpl.html'},
                'nav@content.orders':{templateUrl:'./tpls/nav.html'}
            }
        })
        .state('content.orders.orders',{
            url:'orders',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/orders.html'}
            }
        })
        .state('content.orders.data',{
            url:'data/:id',
            params:{id:null},
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/data.html'}
            }
        })
        .state('content.orders.changedata',{
            url:'changedata',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/changedata.html'}
            }
        })
        .state('content.orders.datainfo',{
            url:'datainfo',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/datainfo.html'},
                'pannel@content':{templateUrl:'./tpls/datainfo_pannel.html'}
            }
        })
        .state('content.orders.orders_sub',{
            url:'orders_sub',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/orders_sub.html'}
            }
        })
        .state('content.orders.orders_send',{
            url:'orders_send',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/orders_send.html'}
            }
        })
        .state('content.orders.orders_select',{
            url:'orders_select',
            views:{
                'cnt@content.orders':{templateUrl:'./tpls/orders_select.html'}
            }
        })
        .state('content.customs',{
            url:'customs',
            views:{
                'content@content':{templateUrl:'./tpls/customs.html'},
                'pannel@content':{templateUrl:'./tpls/customs_pannel.html'}
            }
        })
        .state('content.addcustom',{
            url:'addcustom',
            views:{
                'content@content':{templateUrl:'./tpls/addcustom.html'}
            }
        })
        .state('content.analyse',{
            url:'analyse',
            views:{
                'content@content':{templateUrl:'./tpls/analyse.html'}
            }
        })
        .state('content.analyse_sale',{
            url:'analyse_sale',
            views:{
                'content@content':{templateUrl:'./tpls/analyse_sale.html'}
            }
        })
        .state('content.partners',{
            url:'partners',
            views:{
                'content@content':{templateUrl:'./tpls/partners.html'}
            }
        })
        .state('content.addpartner',{
            url:'addpartner',
            views:{
                'content@content':{templateUrl:'./tpls/addpartner.html'}
            }
        })
        .state('content.shops',{
            url:'shops',
            views:{
                'content@content':{templateUrl:'./tpls/shops.html'}
            }
        })
        .state('content.addshop',{
            url:'addshop',
            views:{
                'content@content':{templateUrl:'./tpls/addshop.html'}
            }
        })
        .state('content.records',{
            url:'records',
            views:{
                'content@content':{templateUrl:'./tpls/records.html'}
            }
        })
        .state('content.pay',{
            url:'pay',
            views:{
                'content@content':{templateUrl:'./tpls/pay.html'}
            }
        })
        .state('content.account',{
            url:'account',
            views:{
                'content@content':{templateUrl:'./tpls/account.html'}
            }
        })
        .state('content.role',{
            url:'role',
            views:{
                'content@content':{templateUrl:'./tpls/role.html'}
            }
        })
        .state('content.roleDetail',{
            url:'role_detail',
            params:{"status":null,"obj":null,"id":null},
            views:{
                'content@content':{templateUrl:'./tpls/role_detail.html'}
            }
        })
})