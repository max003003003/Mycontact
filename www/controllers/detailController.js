angular.module('MyContact')
  .controller('detailController', function($scope,$state,$stateParams,$ionicPopup) {
      $scope.name = $stateParams.name
      $scope.nick = $stateParams.nick
      $scope.social = $stateParams.social
      $scope.mobile = $stateParams.mobile
      $scope.btnBack = function () {
        $state.go('list')
      }

      $scope.btnCall = function () {

        var confirmPopup = $ionicPopup.confirm({
          title: 'Call',
          template: $stateParams.mobile
        })
        confirmPopup.then(function (res) {
          if (res) {
            console.log('You are sure');
          } else {
            console.log('You are not sure');
          }
        })

      }
    }
    )

