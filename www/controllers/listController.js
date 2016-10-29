angular.module('MyContact')
  .controller('listController', function( $scope , $state, $http){
    //  $scope.myDataArray=[
    //    {
    //      name: "Vorabhol Chuaybhan",
    //      nick: "Max",
    //      social:"fb.com/Vorabhol",
    //      mobile:"090-126-4989"
    //    },
    //    {
    //      name: "Wanvisa Maraka",
    //      nick: "Nip",
    //      social:"fb.com/Wanvisa",
    //      mobile:"085-259-36548"
    //    },
    //    {
    //      name: "Topizada Nummueng",
    //      nick: "Top",
    //      social:"fb.com/Topozada",
    //      mobile:"099-125-4325"
    //    },
    //    {
    //      name: "Weerawat Saekoo",
    //      nick: "Game",
    //      social:"fb.com/Weerawat",
    //      mobile:"083-125-4325"
    //    }
    //]

    $http.get('http://localhost/simple/webservice/ws_list.php').then(function(res){
        $scope.myDataArray=res.data.results
       
    },function(err){
        console.log(err)
    })
     $scope.btnDetail = function (data) {
       $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile})
     }
  })
