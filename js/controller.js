var myCtrl=angular.module("controller",['sever']);

var web='http://dzadmin.dsnic.com';

/*****导购员接口******/
var urlforsale=web+'/home/index/sales';
var urlforaddsale=web+'/home/index/sales_add';
var urlforsaledel=web+'/home/index/sales_del';


/*****客户管理接口******/
var urlforcustom=web+'/home/index/user';
var urlforaddcustom=web+'/home/index/user_add';

/*****量体信息接口******/
var urlfordatainfo=web+'/home/index/user_massing';
var urlfordatainfoupdata=web+'/home/index/user_massing_update';

/*****加盟商接口******/
var urlforpartner=web+'/home/index/member_list';
var urlforaddpartner=web+'/home/index/member_add';
var urlforpartnerdel=web+'/home/index/member_del';

/***系统日志**/
var urlforrecord=web+'/home/index/sys_log_list';

/***角色管理**/
var urlforrole=web+'/home/index/role_list';
var urlforaddrole=web+'/home/index/role_add';
var urlforroleselect=web+'/home/index/role_select';
var urlforroleedit=web+'/home/index/role_edit';
var urlforroledel=web+'/home/index/role_del';

/*最外层*/
myCtrl.controller("appCtrl",['$scope','$http','TipService','$rootScope',function($scope,$http,TipService,$rootScope){
    $rootScope.tipService = TipService;
}]);

/*创建订单*/
myCtrl.controller("createCtrl",['$scope','$http','TipService','$state',function($scope,$http,TipService,$state){
    require(['area'],function(){
        _init_area();
    })
}]);

/*导购员列表*/
myCtrl.controller("saleListCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlforsale+"/?callback=JSON_CALLBACK")
        .success(function(data) {
            if(data.status==200){
                $scope.list=data.info;
            }
        });

    $scope.del=function(id,t){
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                id=rsajm(id);
                id=base64encode(utf16to8(id))

                $http .jsonp(urlforsaledel+"/?id="+id+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        console.log(data)
                        if(data.status==200){
                            $scope.list.splice(t,1)
                        }
                    });
            })
        })
    }

    $scope.updata=function(name,phone,status,id){
        var code='realname='+name+'&phone='+phone+'&status='+status+'&sid='+id;
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                code=rsajm(code);
                code=base64encode(utf16to8(code))

                $http .jsonp(urlforsaleupdate+"/?sign="+code+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        console.log(data)
                    });
            })
        })
    }
}]);

myCtrl.controller("saleitemCtrl",['$scope','EventBus','$http',function($scope,EventBus,$http){
    EventBus.on("updata", function(evt) {
        $scope.updatastatus=evt.data.status;

        var code='realname='+$scope.name+'&phone='+$scope.phone+'&status='+$scope.updatastatus+'&sid='+$scope.id;
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                code=rsajm(code);
                code=base64encode(utf16to8(code))

                $http .jsonp(urlforsaleupdate+"/?sign="+code+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        console.log(data)
                    });
            })
        })
    });
}])

/*新增导购员*/
myCtrl.controller("addsaleCtrl",['$scope','$http','TipService','$state',function($scope,$http,TipService,$state){
    var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    $scope.sites=[
        {status:1,name:'在职'},
        {status:0,name:'离职'}
    ];
    $scope.save=function(){
        if($scope.username&&$scope.username!=''&&$scope.userphone&&$scope.status){
            if(!reg.test($scope.userphone)){
                TipService.setMessage('手机号码格式错误', '提示框');
            }else{
                require(['base64','jsencrypt'],function(){
                    require(["rsajs"],function(r){
                        var rsajm= r

                        var sign='realname='+$scope.username+'&phone='+$scope.userphone+'&status='+$scope.status;
                        console.log(sign)
                        sign=rsajm(sign);
                        sign=base64encode(utf16to8(sign))

                        $http .jsonp(urlforaddsale+'/?sign='+sign+"&callback=JSON_CALLBACK")//获取地址列表
                            .success(function(data) {
                                if(data.status==200){
                                    TipService.setMessage('导购员添加成功！', '提示框');
                                    setTimeout(function(){
                                        $state.go('content.sales')
                                    },2000)
                                }
                            });
                    })
                })
            }
        }else{
            TipService.setMessage('请填写完整信息！', '提示框');
        }
    }
}]);

/*客户管理*/
myCtrl.controller("customCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlforcustom+"/?&callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data)
            if(data.status==200){
                $scope.list=data.info
            }
        });
}]);
//新增客户
myCtrl.controller("addcustomCtrl",['$scope','$http','TipService','$state',function($scope,$http,TipService,$state){
    var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    $scope.save=function(){
        if($scope.username&&$scope.username!=''&&$scope.userphone&&$scope.usersex&&$scope.userage){
            if(!reg.test($scope.userphone)){
                TipService.setMessage('手机号码格式错误', '提示框');
            }else{
                var sign="realname="+$scope.username+"&phone="+$scope.userphone+"&sex="+$scope.usersex+"&age="+$scope.userage
                require(['base64','jsencrypt'],function(){
                    require(["rsajs"],function(r){
                        var rsajm= r

                        console.log(sign)
                        sign=rsajm(sign);
                        sign=base64encode(utf16to8(sign))

                        $http .jsonp(urlforaddcustom+'/?sign='+sign+"&callback=JSON_CALLBACK")//获取地址列表
                            .success(function(data) {
                                if(data.status==200){
                                    TipService.setMessage('客户添加成功！', '提示框');
                                    setTimeout(function(){
                                        $state.go('content.customs')
                                    },2000)
                                }
                            });
                    })
                })
            }
        }else{
            TipService.setMessage('请填写完整信息！', '提示框');
        }
    }
}]);


/*查看量体数据*/
myCtrl.controller("ordersCtrl",['$scope','$state',function($scope,$state){
    $scope.todata=function(index,state){
        $state.go(state,{id:index})
    }
}]);

/*查看量体数据*/
myCtrl.controller("dataCtrl",['$scope','$stateParams',function($scope,$stateParams){
   var index=$stateParams.id;

    switch (index){
        case '1':
            $scope.mydata=true,
            $scope.cancle=true,
            $scope.sub=false,
            $scope.redo=false;
            break;
        case '2':
            $scope.mydata=true,
            $scope.cancle=true,
            $scope.sub=true,
            $scope.redo=false;
            break;
        case '3':
            $scope.mydata=false,
            $scope.cancle=false,
            $scope.sub=false,
            $scope.redo=true;
            break;
        default :
            $scope.mydata=true,
            $scope.cancle=true,
            $scope.sub=false,
            $scope.redo=false;
            break;
    }
}]);

/***************************************量体数据信息*********************************/

/*量体数据*/
myCtrl.controller("datainfoCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlfordatainfo+"/?callback=JSON_CALLBACK")
        .success(function(data) {
            if(data.status==200){
                $scope.lw=data.info.lw;
                $scope.lwcy=data.info.lwcy;
                $scope.xw=data.info.shw;
                $scope.xwcy=data.info.shwcy;
                $scope.yw=data.info.yw;
                $scope.ywcy=data.info.ywcy;
                $scope.tw=data.info.tw;
                $scope.twcy=data.info.twcy;
                $scope.jw=data.info.jk;
                $scope.jwcy=data.info.jkcy;
                $scope.yc=data.info.yc;
                $scope.yccy=data.info.cwcy;
                $scope.xc=data.info.xc;
                $scope.xccy=data.info.xccy;
                $scope.bw=data.info.bw;
                $scope.bwcy=data.info.bwcy;
                $scope.ww=data.info.ww;
                $scope.wwcy=data.info.wwcy;
            }
        });

    $scope.savedata=function(){
        var sign='lw='+$scope.lw+'&shw='+$scope.xw+"&yw="+$scope.yw+"&tw="+$scope.tw+"&jk="+$scope.jw+"&yc="+$scope.yc+"&xc="+$scope.xc+"&bw="+$scope.bw
                +"&ww="+$scope.ww;
        var signa='lwcy='+$scope.lwcy+'&shwcy='+$scope.xwcy+"&ywcy="+$scope.ywcy+"&twcy="+$scope.twcy+"&jkcy="+$scope.jwcy+"&yccy="+$scope.yccy+"&xccy="+$scope.xccy+"&bwcy="+$scope.bwcy
            +"&wwcy="+$scope.wwcy


        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                sign=rsajm(sign);
                sign=base64encode(utf16to8(sign))

                signa=rsajm(signa);
                signa=base64encode(utf16to8(signa))

                $http({
                    url:urlfordatainfoupdata,
                    method: 'post',
                    data:{"sign":sign,"signa":signa},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    }
                }).success(function(){
                    console.log("success!");
                })
            })
        })
    }
}]);


/*修改预约单*/
myCtrl.controller("changedataCtrl",['$scope','$http','TipService','$state',function($scope,$http,TipService,$state){
    require(['area'],function(){
        _init_area();
    })
}]);

/*面料选择模块*/
myCtrl.controller("choosemlCtrl",['$scope','EventBus',function($scope,EventBus){
    $scope.pennelon=function(){
        EventBus.fire({
            type: "pennelon",
            data: {
                isactive:true
            }
        });
    }
}]);
myCtrl.controller("mlmoduleCtrl",['$scope','$http','EventBus',function($scope,$http,EventBus){
    $scope.isActive=false;
    $scope.showcover=false;

    $scope.penneloff=function(){
        $scope.isActive=false;
        $scope.showcover=false;
    }

    EventBus.on("pennelon", function(evt) {
        $scope.isActive=evt.data.isactive;
        $scope.showcover=evt.data.isactive;
    });
}]);


/*加盟商管理*/
myCtrl.controller("partnerCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlforpartner+"/?roleid=mm1l81487386220&callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data)
            if(data.status==200){
                $scope.list=data.info;
            }
        });


}]);


myCtrl.controller("addpartner",['$scope','$http','TipService','$state',function($scope,$http,TipService,$state){
    require(['area'],function(){
        _init_area();
    })
    $scope.save=function(to){
        if($scope.partner_name&&$scope.partner_name!=''&&$scope.partner_person&&$scope.partner_name!=''&&$scope.partner_address_1&&$scope.partner_address_1!=''&&$scope.partner_shopnum&&$scope.partner_shopnum!=''){
            require(['base64','jsencrypt'],function(){
                require(["rsajs"],function(r){
                    var rsajm= r

                    var sign='mname='+$scope.partner_name+'&username='+$scope.partner_person+"&address="+$scope.partner_address_1+
                        $scope.partner_address_2+$scope.partner_address_3+'&number='+$scope.partner_shopnum;
                console.log(sign)
                    sign=rsajm(sign);
                    sign=base64encode(utf16to8(sign))

                    $http .jsonp(urlforaddpartner+"/?sign="+sign+"&callback=JSON_CALLBACK")
                        .success(function(data) {
                            console.log(data)
                            if(data.status==200){
                                TipService.setMessage('添加成功！', '提示框');
                                setTimeout(function(){
                                    $state.go(to)
                                },2000)
                            }else{
                                TipService.setMessage(data.msg, '提示框');
                            }
                        });
                })
            })
        }else{
            TipService.setMessage('请填写完整信息！', '提示框');
        }
    }
}]);

/*门店管理*/
myCtrl.controller("shopCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlforpartner+"/?roleid=lfkab1487384064&callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data)
            if(data.status==200){
                $scope.list=data.info;
            }
        });
}]);

myCtrl.controller("plistCtrl",['$scope','$http',function($scope,$http){
    $scope.del=function(id,index){
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                id=rsajm(id);
                id=base64encode(utf16to8(id))

                $http .jsonp(urlforpartnerdel+"/?mid="+id+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        console.log(data)
                        if(data.status==200){
                            $scope.list.splice(index,1)
                        }
                    });
            })
        })
    }
}]);

/*系统日志*/
myCtrl.controller("recordsCtrl",['$scope','$http',function($scope,$http){
    $http .jsonp(urlforrecord+"/?callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data)
            if(data.status==200){
                $scope.list=data.info;
            }
        });
}]);


/*角色管理*/
myCtrl.controller("roleCtrl",['$scope','$http','$state','TipService',function($scope,$http,$state,TipService){
    $http .jsonp(urlforrole+"/?callback=JSON_CALLBACK")
        .success(function(data) {
            if(data.status==200){
                $scope.list=data.info;
            }
        });

    $scope.torole=function(id){
        var z=id;
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                id=rsajm(id);
                id=base64encode(utf16to8(id))

                $http .jsonp(urlforroleselect+"/?id="+id+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        if(data.status==200){
                            $state.go('content.roleDetail',{status:0,obj:data.info,id:z})
                        }
                    });
            })
        })
    }

    $scope.del=function(id,index){
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                id=rsajm(id);
                id=base64encode(utf16to8(id))

                $http .jsonp(urlforroledel+"/?id="+id+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        if(data.status==200){
//                            TipService.setMessage('删除成功！', '提示框');
                            $scope.list.splice(index,1)
                        }
                    });
            })
        })
    }
}]);

myCtrl.controller("addroleCtrl",['$scope','$http','TipService','$state','$stateParams',function($scope,$http,TipService,$state,$stateParams){
    $scope.status=$stateParams.status==0?$stateParams.status:1;
    $scope.obj=$stateParams.obj;
    $scope.id=$stateParams.id;

    $scope.save=function(){
        require(['base64','jsencrypt'],function(){
            require(["rsajs"],function(r){
                var rsajm= r

                var sign='rolename='+$scope.rolename+'&type='+$scope.status+"&id="+$scope.id;
//                console.log(sign)
                sign=rsajm(sign);
                sign=base64encode(utf16to8(sign))

                $http .jsonp(urlforroleedit+"/?sign="+sign+"&callback=JSON_CALLBACK")
                    .success(function(data) {
                        console.log(data)
                        if(data.status==200){
                            if($scope.status==1){
                                TipService.setMessage('角色添加成功！', '提示框');
                                setTimeout(function(){
                                    $state.go('content.role')
                                },2000)
                            }else if($scope.status==0){
                                TipService.setMessage('角色修改成功！', '提示框');
                                setTimeout(function(){
                                    $state.go('content.role')
                                },2000)
                            }
                        }else{
                            TipService.setMessage(data.msg, '提示框');
                        }
                    });
            })
        })

    }
}]);