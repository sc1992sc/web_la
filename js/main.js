/**
 * Created by Administrator on 2016/11/30.
 */
require.config({
    paths:{
        'jquery':'jquery-1.11.3.min',
        'angular':'angular.min',
        'message':'angular-messages.min',
        'ui_router':'angular-ui-router.min',
        'controller':'controller',
        'sever':'sever',
        'directive':'directive',
        'app':'app',
        'base64':'jsrsa/base64',
        'jsencrypt':'jsrsa/jsencrypt.min',
        'rsajs':'jsrsa/rsajs',
        'area':'plung/area'
    }
})

require(['jquery','angular'],function(){
    require(['message','ui_router','controller','sever','directive'],function(){
        require(['app'],function(){
            angular.bootstrap(document,['myModule']);
        })
    })
})