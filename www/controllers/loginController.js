angular.module('MyContact')
  .controller('loginController',function( $scope , $state, $http){      
      $scope.form={}
      $scope.btnLogin= ()=>{ 
          console.log('login')
          $http({
              url:'http://localhost/simple/webservice/ws_login.php',
              method:'POST',
              data:{
                  'var_username':$scope.form.txt_usr,
                  'var_password':$scope.form.txt_pwd
              }
          }
          ).then((res)=>{
              if(res.data.result==="success_login"){
                  $state.go('list')
              }
          },(err)=>{ console.log(err)})
       }
   })